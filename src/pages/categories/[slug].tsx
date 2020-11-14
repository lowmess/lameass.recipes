import * as React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import { Flex, Text, Heading } from 'theme-ui'
import Highlight from '../../components/Highlight'
import RecipeGrid from '../../components/RecipeGrid'
import {
	getAllCategories,
	getCategoryBySlug,
	getAllRecipesByCategory,
} from '../../../lib/api'
import { Recipe, Category } from '../../types/Recipe'
import { PageProps } from '../../types/Page'

interface CategoryPageProps extends PageProps {
	category: Category
	recipes: Recipe[]
}

const CategoryPage: React.FC<CategoryPageProps> = ({
	category,
	recipes,
	titleSuffix,
	description,
}) => (
	<React.Fragment>
		<Head>
			<title key="title">
				{category.title} recipes{titleSuffix}
			</title>
			<meta name="description" content={description} />
		</Head>

		<Flex sx={{ alignItems: 'baseline', marginY: [5, null, 6] }}>
			<Text
				sx={{
					position: 'relative',
					top: 1,
					marginRight: 3,
					fontSize: [5, null, 6],
					lineHeight: 'solid',
				}}
			>
				{category.emoji}
			</Text>

			<Heading as="h1" variant="page-name">
				<Highlight>{category.title}</Highlight> recipes
			</Heading>
		</Flex>

		{recipes.length > 0 ? (
			<RecipeGrid mb={5} recipes={recipes} />
		) : (
			<Text as="p" sx={{ marginBottom: 5, fontSize: [2, null, 3] }}>
				We&rsquo;ve been too busy enjoying our {category.title.toLowerCase()}{' '}
				recipes to write them down. We&rsquo;ll put some up after we do one more
				test batch. (Or two. Or three&hellip;)
			</Text>
		)}
	</React.Fragment>
)

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const {
		category,
		site: {
			globalSeo: {
				titleSuffix,
				fallbackSeo: { description },
			},
		},
	} = await getCategoryBySlug(params.slug)
	const { allRecipes: recipes } = await getAllRecipesByCategory(params.slug)

	return {
		props: { category, recipes, titleSuffix, description },
		revalidate: 60,
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	const { allCategories } = await getAllCategories()

	const paths = allCategories?.map((c) => ({ params: { slug: c.slug } })) || []

	return {
		paths,
		fallback: false,
	}
}

export default CategoryPage
