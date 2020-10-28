import * as React from 'react'
import { GetStaticProps } from 'next'
import HighlightHeading from '../../components/HighlightHeading'
import RecipeGrid from '../../components/RecipeGrid'
import { getAllRecipes } from '../../../lib/api'
import { Recipe } from '../../types/Recipe'

interface RecipePageProps {
  recipes: Recipe[]
}

const RecipePage: React.FC<RecipePageProps> = ({ recipes }) => (
  <React.Fragment>
    <HighlightHeading as="h1" variant="page-name" my={[5, null, 6]}>
      All Recipes
    </HighlightHeading>

    <RecipeGrid mb={5} recipes={recipes} level="h2" />
  </React.Fragment>
)

export const getStaticProps: GetStaticProps = async () => {
  const recipes = await getAllRecipes()

  return {
    props: { recipes },
    revalidate: 60,
  }
}

export default RecipePage
