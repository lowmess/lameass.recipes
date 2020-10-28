import * as React from 'react'
import { Grid } from 'theme-ui'
import { ThemeUIProps } from '../types/ThemeUIComponent'
import { Recipe } from '../types/Recipe'
import RecipePreview from './RecipePreview'

interface RecipeGridProps extends ThemeUIProps {
  recipes: Recipe[]
}

const RecipeGrid: React.FC<RecipeGridProps> = ({ recipes, ...props }) => (
  <Grid columns={[1, null, 2, 3]} gap={4} {...props}>
    {recipes.map((recipe) => (
      <RecipePreview key={recipe.id} recipe={recipe} />
    ))}
  </Grid>
)

export default RecipeGrid
