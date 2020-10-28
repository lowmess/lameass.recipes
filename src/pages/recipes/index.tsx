import * as React from 'react'
import { GetStaticProps } from 'next'
import { getAllRecipes } from '../../../lib/api'
import { Recipe } from '../../types/Recipe'

interface RecipePageProps {
  recipes: Recipe[]
}

const RecipePage: React.FC<RecipePageProps> = ({ recipes }) => (
  <pre>{JSON.stringify(recipes, null, 2)}</pre>
)

export const getStaticProps: GetStaticProps = async () => {
  const recipes = await getAllRecipes()

  return {
    props: { recipes },
    revalidate: 60,
  }
}

export default RecipePage
