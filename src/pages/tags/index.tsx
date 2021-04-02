import * as React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { default as NextLink } from 'next/link'
import { Heading, Link } from 'theme-ui'
import Highlight from '../../components/Highlight'
import Inline from '../../components/Inline'
import metadata from '../../constants/metadata.json'
import { getAllTags } from '../../api'
import { Tag } from '../../types/api'

interface TagsPageProps {
	tags: Tag[]
}

const TagsPage: React.FC<TagsPageProps> = ({ tags }) => (
	<React.Fragment>
		<Head>
			<title key="title">All tags {metadata.titleSuffix}</title>
			<meta name="description" content={metadata.description} />
		</Head>

		<Heading as="h1" variant="page-name" my={[5, null, 6]}>
			<Highlight>All tags</Highlight>
		</Heading>

		<Inline gap={3} pb={5}>
			{tags.map(({ _id, title, slug }) => (
				<NextLink key={_id} href={`/tags/${slug}`} passHref>
					<Link variant="tag" sx={{ fontSize: 2 }}>
						{title}
					</Link>
				</NextLink>
			))}
		</Inline>
	</React.Fragment>
)

export const getStaticProps: GetStaticProps = async () => {
	const tags = await getAllTags()

	return {
		props: { tags },
	}
}

export default TagsPage
