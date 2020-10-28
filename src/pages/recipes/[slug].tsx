import * as React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllRecipes, getRecipeBySlug } from '../../../lib/api'
import { Recipe } from '../../types/Recipe'

interface RecipePageProps {
  recipe: Recipe
}

const RecipePage: React.FC<RecipePageProps> = ({ recipe }) => (
  <pre>{JSON.stringify(recipe, null, 2)}</pre>
)

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const recipe = await getRecipeBySlug(params.slug)

  return {
    props: { recipe },
    revalidate: 60,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const recipes = await getAllRecipes()
  const paths = recipes.map((r) => ({ params: { slug: r.slug } })) || []

  return {
    paths,
    fallback: false,
  }
}

export default RecipePage
