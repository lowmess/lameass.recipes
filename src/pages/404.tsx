import * as React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { default as NextLink } from 'next/link'
import { Text, Heading, Link } from 'theme-ui'
import { getAllRecipes } from '../../lib/api'
import Highlight from '../components/Highlight'
import RecipeGrid from '../components/RecipeGrid'
import metadata from '../constants/metadata.json'
import { Recipe } from '../types/Recipe'

interface ErrorPageProps {
	recipes: Recipe[]
}

const ErrorPage: React.FC<ErrorPageProps> = ({ recipes }) => (
	<React.Fragment>
		<Head>
			<title key="title">Oops! {metadata.titleSuffix}</title>
			<meta name="description" content={metadata.description} />
		</Head>

		<Heading as="h1" variant="page-name" my={[5, null, 6]}>
			<Highlight>Error 404</Highlight>
		</Heading>

		<Text as="p" sx={{ marginBottom: 5, fontSize: [3, null, 4] }}>
			Oops! We couldn&rsquo;t find that, but we&rsquo;re on the case. Maybe take
			a peek at one of these new{' '}
			<NextLink href="/recipes" passHref>
				<Link>recipes</Link>
			</NextLink>{' '}
			in the mean&nbsp;time:
		</Text>

		<RecipeGrid mb={5} recipes={recipes} />
	</React.Fragment>
)

export const getStaticProps: GetStaticProps = async () => {
	const allRecipes = await getAllRecipes()

	const recipes = allRecipes?.slice(0, 6) || []

	return {
		props: { recipes },
	}
}

export default ErrorPage
