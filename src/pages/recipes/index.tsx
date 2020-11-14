import * as React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Heading } from 'theme-ui'
import Highlight from '../../components/Highlight'
import RecipeGrid from '../../components/RecipeGrid'
import { getAllRecipes } from '../../../lib/api'
import { Recipe } from '../../types/Recipe'
import { PageProps } from '../../types/Page'

interface RecipePageProps extends PageProps {
	recipes: Recipe[]
}

const RecipePage: React.FC<RecipePageProps> = ({
	recipes,
	titleSuffix,
	description,
}) => (
	<React.Fragment>
		<Head>
			<title key="title">All recipes{titleSuffix}</title>
			<meta name="description" content={description} />
		</Head>

		<Heading as="h1" variant="page-name" my={[5, null, 6]}>
			<Highlight>All recipes</Highlight>
		</Heading>

		<RecipeGrid mb={5} recipes={recipes} level="h2" />
	</React.Fragment>
)

export const getStaticProps: GetStaticProps = async () => {
	const {
		allRecipes: recipes,
		site: {
			globalSeo: {
				titleSuffix,
				fallbackSeo: { description },
			},
		},
	} = await getAllRecipes()

	return {
		props: { recipes, titleSuffix, description },
		revalidate: 60,
	}
}

export default RecipePage
