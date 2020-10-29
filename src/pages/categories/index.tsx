import * as React from 'react'
import { GetStaticProps } from 'next'
import { default as NextLink } from 'next/link'
import { Grid, Text, Card, Link } from 'theme-ui'
import HighlightHeading from '../../components/HighlightHeading'
import { getAllCategories } from '../../../lib/api'
import { Category } from '../../types/Recipe'

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

interface CategoriesPageProps {
  categories: Category[]
}

const CategoriesPage: React.FC<CategoriesPageProps> = ({ categories }) => (
  <React.Fragment>
    <HighlightHeading as="h1" variant="page-name" my={[5, null, 6]}>
      Categories
    </HighlightHeading>

    <Grid columns={[1, null, null, 2]} gap={4}>
      {categories.map((category) => (
        <CategoryPreview key={category.id} category={category} />
      ))}
    </Grid>
  </React.Fragment>
)

export const getStaticProps: GetStaticProps = async () => {
  const categories = await getAllCategories()

  return {
    props: { categories },
    revalidate: 60,
  }
}

export default CategoriesPage
