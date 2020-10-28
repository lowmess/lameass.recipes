import * as React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { Heading } from 'theme-ui'
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
    <Heading>{category.title}</Heading>

    <pre>{JSON.stringify(recipes, null, 2)}</pre>
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
