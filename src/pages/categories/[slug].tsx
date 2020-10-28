import * as React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { Flex, Text } from 'theme-ui'
import HighlightHeading from '../../components/HighlightHeading'
import RecipeGrid from '../../components/RecipeGrid'
import {
  getAllCategories,
  getCategoryBySlug,
  getAllRecipesByCategory,
} from '../../../lib/api'
import { Recipe, Category } from '../../types/Recipe'

interface CategoryPageProps {
  category: Category
  recipes: Recipe[]
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category, recipes }) => (
  <React.Fragment>
    <Flex sx={{ alignItems: 'center', marginY: [5, null, 6] }}>
      <Text
        sx={{
          position: 'relative',
          top: -1,
          marginRight: 3,
          fontSize: [5, null, 6],
          lineHeight: 'solid',
        }}
      >
        {category.emoji}
      </Text>

      <HighlightHeading as="h1" variant="page-name">
        {category.title}
      </HighlightHeading>
    </Flex>

    <RecipeGrid mb={5} recipes={recipes} />
  </React.Fragment>
)

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = await getCategoryBySlug(params.slug)
  const recipes = await getAllRecipesByCategory(params.slug)

  return {
    props: { category, recipes },
    revalidate: 60,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getAllCategories()

  const paths = categories.map((c) => ({ params: { slug: c.slug } })) || []

  return {
    paths,
    fallback: false,
  }
}

export default CategoryPage
