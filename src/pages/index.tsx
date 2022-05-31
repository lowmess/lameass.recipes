import * as React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import metadata from '../constants/metadata.json'
import { Container } from '../components/Container'
import { getRecentRecipes, Recipe } from '../api'
import { RecipeCard } from '../components/RecipeCard'
import { Heading } from '../components/Heading'

export const getStaticProps: GetStaticProps = async (context) => {
	const recipes = await getRecentRecipes(context.preview)

	return {
		props: {
			recipes,
		},
	}
}

interface HomepageProps {
	recipes: Array<Recipe>
}

const Homepage: React.FC<HomepageProps> = ({ recipes }) => (
	<React.Fragment>
		<Head>
			<title key="title">{metadata.title}</title>
			<meta name="description" content={metadata.description} />
		</Head>

		<Container>
			<Heading component="h1" fontWeight="regular" marginY="lg">
				Recent additions to the cookbook
			</Heading>

			{recipes.map((recipe) => (
				<RecipeCard key={recipe.id} recipe={recipe} />
			))}
		</Container>
	</React.Fragment>
)

export default Homepage
