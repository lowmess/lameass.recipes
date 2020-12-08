import * as React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { default as NextLink } from 'next/link'
import { useThemeUI, Box, Grid, Flex, Text, Heading, Link } from 'theme-ui'
import { FolderSimple, Tag, Clock, Users, Hash } from 'phosphor-react'
import minutesToHours from '../../../lib/minutesToHours'
import Stack from '../../components/Stack'
import Inline from '../../components/Inline'
import RecipeGrid from '../../components/RecipeGrid'
import Highlight from '../../components/Highlight'
import { getAllRecipes, getRecipeBySlug } from '../../../lib/api'
import metadata from '../../constants/metadata.json'
import { Recipe } from '../../types/Recipe'

const infoStyles = {
	alignItems: 'baseline',

	svg: {
		flexShrink: 0,
		position: 'relative',
		top: '2px',
	},
}

const linkStyles = {
	a: {
		color: 'text',
		textDecorationColor: (theme) => theme.colors.accent,

		'&:hover': {
			color: 'accent',
		},
	},
}

interface RecipePageProps {
	recipe: Recipe
}

const RecipePage: React.FC<RecipePageProps> = ({ recipe }) => {
	const { colorMode } = useThemeUI()
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

			<Box
				sx={{
					position: 'relative',
					marginY: [5, null, 6],

					'.swash': {
						position: 'absolute',
						top: [-4, null, '-6rem'],
						left: [-5, null, -6],
						width: [256, null, 512],
						height: [90, null, 180],
						userSelect: 'none',

						'@media print': {
							display: 'none',
						},
					},
				}}
			>
				<img
					width="512"
					height="182"
					alt=""
					src={`/images/recipe-swash-${colorMode}.png`}
					srcSet={`/images/recipe-swash-${colorMode}@2x.png 2x`}
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
									top: 3,
									width: (theme) => [
										`calc(100% + ${theme.space[3]} * 2)`,
										`calc(100% + ${theme.space[4]} * 2)`,
										null,
										'auto',
									],
									marginX: [-3, -4, null, 0],
									borderRadius: [null, null, null, 3],
									paddingY: 3,
									paddingX: [3, 4],
									backgroundColor: 'muted',
								}}
							>
								<Heading variant="section-heading" mt={2}>
									Info
								</Heading>

								<Stack gap={2}>
									{(prepTime || cookTime) && (
										<Flex sx={infoStyles}>
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
										<Flex sx={infoStyles}>
											<YieldIcon />

											<Text as="span" ml={3}>
												{yieldAmount}
											</Text>
										</Flex>
									)}

									<Flex sx={infoStyles}>
										<FolderSimple />

										<NextLink href={`/categories/${category.slug}`} passHref>
											<Link variant="ui" ml={3}>
												{category.title}
											</Link>
										</NextLink>
									</Flex>

									{tags.length > 0 && (
										<Flex sx={infoStyles}>
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

										<Box
											as="ul"
											sx={{ paddingLeft: 0, listStyleType: 'none ' }}
										>
											{equipment.map((implement, index) => (
												<Box
													key={index}
													as="li"
													sx={{
														width: (theme) => [
															`calc(100% + ${theme.space[2]} * 2)`,
															`calc(100% + ${theme.space[3]} * 2)`,
														],
														marginX: [-2, -3],
														paddingY: 2,
														paddingX: [2, 3],
														borderRadius: 2,

														...linkStyles,

														'&:nth-of-type(even)': {
															backgroundColor: 'background',
														},
													}}
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

						<Stack gap={[4, null, 5]} sx={{ fontSize: [null, null, null, 2] }}>
							{ingredients.length > 0 && (
								<React.Fragment>
									<Heading mb={3}>Ingredients</Heading>

									<Text
										as="ul"
										sx={{
											paddingLeft: 0,
											listStyleType: 'none',

											...linkStyles,

											'@media print': {
												paddingLeft: 4,
												listStyleType: 'disc',
											},
										}}
									>
										{ingredients.map((ingredient, index) => (
											<Text
												key={index}
												as="li"
												sx={{
													width: (theme) => [
														`calc(100% + ${theme.space[2]} * 2)`,
														`calc(100% + ${theme.space[3]} * 2)`,
													],
													marginX: [-2, -3],
													paddingY: 2,
													paddingX: [2, 3],
													borderRadius: 2,

													'&:nth-of-type(even)': {
														backgroundColor: 'muted',
													},

													'@media print': {
														padding: 0,
													},
												}}
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
									<Heading mb={sections.length > 1 ? 4 : 3}>Directions</Heading>

									<Stack gap={4}>
										{sections.map((section) => (
											<React.Fragment key={section._key}>
												{section.title && sections.length > 1 && (
													<Heading variant="section-heading" as="h3">
														{section.title}
													</Heading>
												)}

												<Box as="ol" pl={['1.5em', null, '1.75em']}>
													{section.steps.map((step, index) => (
														<Text
															key={index}
															as="li"
															sx={{
																maxWidth: '55ch',
																paddingY: 2,

																...linkStyles,

																'@media print': {
																	padding: 0,
																},
															}}
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
													sx={{
														p: {
															maxWidth: '55ch',
															margin: 0,
														},

														'p + p': {
															marginTop: 3,
														},

														a: {
															color: 'text',
															textDecorationColor: (theme) =>
																theme.colors.accent,

															'&:hover': {
																color: 'accent',
															},
														},
													}}
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
	const recipe = await getRecipeBySlug(params.slug)

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
