import * as React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { default as NextLink } from 'next/link'
import { Box, Grid, Flex, Text, Heading, Link } from 'theme-ui'
import { FolderSimple, Tag, Clock, Users, Hash } from 'phosphor-react'
import minutesToHours from '../../../lib/minutesToHours'
import Stack from '../../components/Stack'
import Inline from '../../components/Inline'
import RecipeGrid from '../../components/RecipeGrid'
import Highlight from '../../components/Highlight'
import { getAllRecipes, getRecipeBySlug } from '../../../lib/api'
import metadata from '../../constants/metadata.json'
import * as styles from '../../constants/styles/detailPage'
import { Recipe } from '../../../lib/types'

interface RecipePageProps {
	recipe: Recipe
}

const RecipePage: React.FC<RecipePageProps> = ({ recipe }) => {
	const {
		title,
		prepTime,
		cookTime,
		yieldAmount,
		yieldType = 'servings',
		equipment = [],
		ingredients = [],
		sections = [],
		notes,
		category,
		tags = [],
		similarRecipes = [],
	} = recipe

	let YieldIcon = Users

	switch (yieldType) {
		case 'servings':
			YieldIcon = Users
			break
		case 'amount':
			YieldIcon = Hash
			break
		default:
			YieldIcon = Users
	}

	return (
		<React.Fragment>
			<Head>
				<title key="title">
					{recipe.title} {metadata.titleSuffix}
				</title>

				<meta name="description" content={metadata.description} />
			</Head>

			<Box sx={styles.swash}>
				<img
					width="512"
					height="182"
					alt=""
					src={`/images/recipe-swash.png`}
					srcSet={`/images/recipe-swash@2x.png 2x`}
					className="swash"
				/>

				<Box sx={{ position: 'relative' }}>
					<Heading as="h1" variant="page-name" sx={{ fontSize: [4, 5, 6] }}>
						{title}
					</Heading>

					<Grid columns={[1, null, null, '20rem 1fr']} gap={4} mt={4}>
						<div>
							<Box
								sx={{
									position: 'sticky',
									...styles.sidebar,
								}}
							>
								<Heading variant="section-heading" mt={2}>
									Info
								</Heading>

								<Stack gap={2}>
									{(prepTime || cookTime) && (
										<Flex sx={styles.info}>
											<Clock />

											<Flex
												sx={{
													flexDirection: 'column',
													marginLeft: 3,
												}}
											>
												{prepTime > 0 && (
													<Text as="span">{minutesToHours(prepTime)} prep</Text>
												)}

												{cookTime > 0 && (
													<Text as="span">{minutesToHours(cookTime)} cook</Text>
												)}
											</Flex>
										</Flex>
									)}

									{yieldAmount && (
										<Flex sx={styles.info}>
											<YieldIcon />

											<Text as="span" ml={3}>
												{yieldAmount}
											</Text>
										</Flex>
									)}

									<Flex sx={{ ...styles.info, ...styles.printHidden }}>
										<FolderSimple />

										<NextLink href={`/categories/${category.slug}`} passHref>
											<Link variant="ui" ml={3}>
												{category.title}
											</Link>
										</NextLink>
									</Flex>

									{tags.length > 0 && (
										<Flex sx={{ ...styles.info, ...styles.printHidden }}>
											<Tag />

											<Inline gap={2} ml={3}>
												{tags.map((tag) => (
													<NextLink
														key={tag._id}
														href={`/tags/${tag.slug}`}
														passHref
													>
														<Link variant="tag-info" sx={{ fontSize: 1 }}>
															{tag.title}
														</Link>
													</NextLink>
												))}
											</Inline>
										</Flex>
									)}
								</Stack>

								{equipment.length > 0 && (
									<React.Fragment>
										<Heading variant="section-heading" mt={4}>
											Equipment
										</Heading>

										<Box as="ul" sx={styles.stripedList}>
											{equipment.map((implement, index) => (
												<Box
													key={index}
													as="li"
													sx={styles.getStripedListItemStyles('background')}
													dangerouslySetInnerHTML={{
														__html: implement,
													}}
												/>
											))}
										</Box>
									</React.Fragment>
								)}
							</Box>
						</div>

						<Stack
							gap={[4, null, 5]}
							sx={{
								fontSize: [null, null, null, 2],
							}}
						>
							{ingredients.length > 0 && (
								<React.Fragment>
									<Heading variant="recipe-heading" mb={3}>
										Ingredients
									</Heading>

									<Text as="ul" sx={styles.stripedList}>
										{ingredients.map((ingredient, index) => (
											<Text
												key={index}
												as="li"
												sx={styles.getStripedListItemStyles('muted')}
												dangerouslySetInnerHTML={{
													__html: ingredient,
												}}
											/>
										))}
									</Text>
								</React.Fragment>
							)}

							{sections.length > 0 && (
								<React.Fragment>
									<Heading
										variant="recipe-heading"
										mb={sections.length > 1 ? 4 : 3}
									>
										Directions
									</Heading>

									<Stack gap={4}>
										{sections.map((section) => (
											<React.Fragment key={section._key}>
												{section.title && sections.length > 1 && (
													<Heading variant="section-heading" as="h3">
														{section.title}
													</Heading>
												)}

												<Box as="ol" pl="1.25em">
													{section.steps.map((step, index) => (
														<Text
															key={index}
															as="li"
															sx={styles.sectionListItem}
															dangerouslySetInnerHTML={{
																__html: step,
															}}
														/>
													))}
												</Box>
											</React.Fragment>
										))}

										{notes && (
											<Box>
												<Heading variant="section-heading">Notes</Heading>

												<Box
													sx={styles.notes}
													dangerouslySetInnerHTML={{
														__html: notes,
													}}
												/>
											</Box>
										)}
									</Stack>
								</React.Fragment>
							)}
						</Stack>
					</Grid>

					{similarRecipes.length > 0 && (
						<Box
							sx={{
								'@media print': {
									display: 'none',
								},
							}}
						>
							<Heading mt={[5, 6]} mb={4}>
								Other <Highlight>{category.title.toLowerCase()}</Highlight>{' '}
								recipes:
							</Heading>

							<RecipeGrid recipes={similarRecipes} />
						</Box>
					)}
				</Box>
			</Box>
		</React.Fragment>
	)
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug

	const recipe = await getRecipeBySlug(slug)

	return {
		props: { recipe },
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	const allRecipes = await getAllRecipes()

	const paths =
		allRecipes?.map((r: Recipe) => ({ params: { slug: r.slug } })) || []

	return {
		paths,
		fallback: false,
	}
}

export default RecipePage
