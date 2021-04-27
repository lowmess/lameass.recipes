import * as React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { default as NextLink } from 'next/link'
import { Box, Grid, Flex, Text, Heading, Link } from 'theme-ui'
import { Tag, Clock, Users } from 'phosphor-react'
import minutesToHours from '../../utils/minutesToHours'
import Stack from '../../components/Stack'
import Inline from '../../components/Inline'
import metadata from '../../constants/metadata.json'
import * as styles from '../../constants/styles/detailPage'
import * as nestedStyles from '../../constants/styles/nested'
import { getAllMeals, getMealBySlug } from '../../api'
import { Meal } from '../../types/api'

interface MealPageProps {
	meal: Meal
}

const MealPage: React.FC<MealPageProps> = ({ meal }) => {
	const {
		title,
		description,
		prepTime,
		cookTime,
		yieldAmount,
		tags = [],
		recipes = [],
		sections = [],
	} = meal

	return (
		<React.Fragment>
			<Head>
				<title key="title">
					{meal.title} {metadata.titleSuffix}
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

					{description && (
						<Box
							sx={{
								marginTop: 4,
								marginBottom: [4, null, null, 5],
								fontSize: [null, 2, null, 3],

								...nestedStyles.paragraphs,
								...nestedStyles.links,

								...styles.printHidden,
							}}
							dangerouslySetInnerHTML={{ __html: description }}
						/>
					)}

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
											<Users />

											<Text as="span" ml={3}>
												{yieldAmount}
											</Text>
										</Flex>
									)}

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

								{recipes.length > 0 && (
									<React.Fragment>
										<Heading variant="section-heading" mt={4}>
											Recipes
										</Heading>

										<Box as="ul" sx={styles.stripedList}>
											{recipes.map((recipe) => (
												<Box
													key={recipe._id}
													as="li"
													sx={styles.getStripedListItemStyles('background')}
												>
													<NextLink href={`/recipes/${recipe.slug}`} passHref>
														<Link variant="ui">{recipe.title}</Link>
													</NextLink>
												</Box>
											))}
										</Box>
									</React.Fragment>
								)}
							</Box>
						</div>

						<Box
							sx={{
								fontSize: [null, null, null, 2],
							}}
						>
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
											<div key={section._key}>
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
											</div>
										))}
									</Stack>
								</React.Fragment>
							)}
						</Box>
					</Grid>
				</Box>
			</Box>
		</React.Fragment>
	)
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug

	const meal = await getMealBySlug(slug)

	return {
		props: { meal },
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	const allMeals = await getAllMeals()

	const paths = allMeals?.map((m: Meal) => ({ params: { slug: m.slug } })) || []

	return {
		paths,
		fallback: false,
	}
}

export default MealPage
