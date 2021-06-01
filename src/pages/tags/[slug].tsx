import * as React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import { Text, Heading } from 'theme-ui'
import Highlight from '../../components/Highlight'
import RecipeGrid from '../../components/RecipeGrid'
import metadata from '../../constants/metadata.json'
import { getAllTags, getTagBySlug } from '../../api'
import { Tag } from '../../types/api'

interface TagPageProps {
	tag: Tag
}

const TagPage: React.FC<TagPageProps> = ({ tag }) => (
	<React.Fragment>
		<Head>
			<title key="title">
				{/* eslint-disable-next-line react/no-unescaped-entities */}
				Recipes tagged "{tag.title}" {metadata.titleSuffix}
			</title>
			<meta name="description" content={metadata.description} />
		</Head>

		<Heading as="h1" variant="page-name" my={[5, null, 6]}>
			Recipes tagged{' '}
			<Highlight>&ldquo;{tag.title.toLowerCase()}&rdquo;</Highlight>
		</Heading>

		{tag.recipes?.length > 0 ? (
			<RecipeGrid mb={5} recipes={tag.recipes} />
		) : (
			<Text as="p" sx={{ marginBottom: 5, fontSize: [2, null, 3] }}>
				It doesn&rsquo;t look like we have any recipes tagged &ldquo;
				{tag.title.toLowerCase()}&rdquo; yet. They&rsquo;re probably on the way
				from the kitchen right now.
			</Text>
		)}
	</React.Fragment>
)

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug

	const tag = await getTagBySlug(slug)

	return {
		props: { tag },
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	const allTags = await getAllTags()

	const paths = allTags?.map((c: Tag) => ({ params: { slug: c.slug } })) || []

	return {
		paths,
		fallback: false,
	}
}

export default TagPage
