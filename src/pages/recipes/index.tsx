import * as React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Heading } from 'theme-ui'
import Highlight from '../../components/Highlight'
import RecipeGrid from '../../components/RecipeGrid'
import { getAllRecipes } from '../../../lib/api'
import metadata from '../../constants/metadata.json'
import { Recipe } from '../../types/Recipe'

interface RecipePageProps {
	recipes: Recipe[]
}

const RecipePage: React.FC<RecipePageProps> = ({ recipes }) => (
	<React.Fragment>
		<Head>
			<title key="title">All recipes {metadata.titleSuffix}</title>
			<meta name="description" content={metadata.description} />
		</Head>

		<Heading as="h1" variant="page-name" my={[5, null, 6]}>
			<Highlight>All recipes</Highlight>
		</Heading>

		<RecipeGrid mb={5} recipes={recipes} level="h2" />
	</React.Fragment>
)

export const getStaticProps: GetStaticProps = async () => {
	const recipes = await getAllRecipes()

	return {
		props: { recipes },
	}
}

export default RecipePage
