import * as React from 'react'
import { Grid } from 'theme-ui'
import { GridProps } from '@theme-ui/components'
import { Recipe } from '../types/api'
import RecipePreview from './RecipePreview'

interface RecipeGridProps extends GridProps {
	recipes: Recipe[]
	level?: 'h2' | 'h3' | 'h4' | 'h5' | 'h5'
}

const RecipeGrid: React.FC<RecipeGridProps> = ({
	recipes,
	level = 'h3',
	...props
}) => (
	<Grid columns={[1, null, 2, 3]} gap={4} {...props}>
		{recipes.map((recipe) => (
			<RecipePreview key={recipe._id} recipe={recipe} level={level} />
		))}
	</Grid>
)

export default RecipeGrid
