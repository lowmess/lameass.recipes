import * as React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { default as NextLink } from 'next/link'
import { Grid, Text, Card, Heading, Link } from 'theme-ui'
import Highlight from '../../components/Highlight'
import { getAllCategories } from '../../../lib/api'
import { Category } from '../../types/Recipe'
import { PageProps } from '../../types/Page'

interface CategoryPreviewProps {
	category: Category
}

const CategoryPreview: React.FC<CategoryPreviewProps> = ({ category }) => {
	const { slug, title, emoji } = category

	return (
		<Card>
			<NextLink href={`/categories/${slug}`} passHref>
				<Link
					variant="ui"
					sx={{
						display: 'flex',
						alignItems: 'center',
						position: 'relative',
						paddingY: 2,
						paddingX: 3,
						fontSize: 5,
						fontFamily: 'heading',
					}}
				>
					<Text
						as="span"
						sx={{ position: 'relative', top: 1, marginRight: 4, fontSize: 5 }}
						aria-hidden
					>
						{emoji}
					</Text>

					{title}
				</Link>
			</NextLink>
		</Card>
	)
}

interface CategoriesPageProps extends PageProps {
	categories: Category[]
}

const CategoriesPage: React.FC<CategoriesPageProps> = ({
	categories,
	titleSuffix,
	description,
}) => (
	<React.Fragment>
		<Head>
			<title key="title">All categories{titleSuffix}</title>
			<meta name="description" content={description} />
		</Head>

		<Heading as="h1" variant="page-name" my={[5, null, 6]}>
			<Highlight>Categories</Highlight>
		</Heading>

		<Grid columns={[1, null, null, 2]} gap={4} mb={5}>
			{categories.map((category) => (
				<CategoryPreview key={category.id} category={category} />
			))}
		</Grid>
	</React.Fragment>
)

export const getStaticProps: GetStaticProps = async () => {
	const {
		allCategories: categories,
		site: {
			globalSeo: {
				titleSuffix,
				fallbackSeo: { description },
			},
		},
	} = await getAllCategories()

	return {
		props: { categories, titleSuffix, description },
	}
}

export default CategoriesPage
