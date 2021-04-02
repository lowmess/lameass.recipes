import * as React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import { Flex, Text, Heading } from 'theme-ui'
import Highlight from '../../components/Highlight'
import RecipeGrid from '../../components/RecipeGrid'
import metadata from '../../constants/metadata.json'
import { getAllCategories, getCategoryBySlug } from '../../api'
import { Category } from '../../types/api'

interface CategoryPageProps {
	category: Category
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category }) => (
	<React.Fragment>
		<Head>
			<title key="title">
				{category.title} recipes {metadata.titleSuffix}
			</title>
			<meta name="description" content={metadata.description} />
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

		{category.recipes?.length > 0 ? (
			<RecipeGrid mb={5} recipes={category.recipes} />
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
	const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug

	const category = await getCategoryBySlug(slug)

	return {
		props: { category },
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	const allCategories = await getAllCategories()

	const paths =
		allCategories?.map((c: Category) => ({ params: { slug: c.slug } })) || []

	return {
		paths,
		fallback: false,
	}
}

export default CategoryPage
