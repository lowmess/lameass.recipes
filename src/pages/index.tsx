import * as React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { default as NextLink } from 'next/link'
import { Box, Flex, Heading, Link } from 'theme-ui'
import { ArrowRight } from 'phosphor-react'
import Stack from '../components/Stack'
import MealPreview from '../components/MealPreview'
import RecipeGrid from '../components/RecipeGrid'
import metadata from '../constants/metadata.json'
import { getHomepage } from '../../lib/api'
import { Recipe, Meal } from '../../lib/types'

interface HomepageProps {
	headline: string
	featuredMeal?: Meal
	recentRecipes?: Recipe[]
}

const Homepage: React.FC<HomepageProps> = ({
	headline,
	featuredMeal,
	recentRecipes = [],
}) => (
	<React.Fragment>
		<Head>
			<title key="title">{metadata.title}</title>
			<meta name="description" content={metadata.description} />
		</Head>

		<Box
			sx={{
				marginTop: 5,
				paddingTop: [3, null, 4],
				paddingBottom: [3, null, 4],
				backgroundImage: `url(/images/headline-swash.png)`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: '20% center',
				backgroundSize: 'contain',

				'@media (min-width: 44em), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)': {
					backgroundImage: `url(/images/headline-swash@2x.png)`,
				},

				'@media (min-width: 64em)': {
					backgroundPosition: '25%',
				},
			}}
		>
			<Heading as="h1" variant="headline">
				{headline}
			</Heading>
		</Box>

		<Stack gap={[5, null, 6]} my={[5, 6]}>
			{featuredMeal && (
				<Box>
					<Flex
						sx={{
							flexDirection: ['column', 'row'],
							alignItems: [null, 'center'],
							justifyContent: 'space-between',
						}}
					>
						<Heading>Featured meal</Heading>

						<NextLink href="/meals" passHref>
							<Link variant="view-all">
								View All <ArrowRight weight="bold" />
							</Link>
						</NextLink>
					</Flex>

					<MealPreview meal={featuredMeal} mt={4} />
				</Box>
			)}

			<Box>
				<Flex
					sx={{
						flexDirection: ['column', 'row'],
						alignItems: [null, 'center'],
						justifyContent: 'space-between',
					}}
				>
					<Heading>Recent recipes</Heading>

					<NextLink href="/recipes" passHref>
						<Link variant="view-all">
							View All <ArrowRight weight="bold" />
						</Link>
					</NextLink>
				</Flex>

				<RecipeGrid mt={4} recipes={recentRecipes} />
			</Box>
		</Stack>
	</React.Fragment>
)

export const getStaticProps: GetStaticProps = async () => {
	const { headline, featuredMeal, recentRecipes } = await getHomepage()

	return {
		props: {
			headline,
			featuredMeal,
			recentRecipes,
		},
	}
}

export default Homepage
