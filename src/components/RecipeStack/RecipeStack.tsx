import * as React from 'react'
import { Recipe } from '../../api'
import { Box, BoxProps } from '../Box'
import { RecipeCard } from '../RecipeCard'
import * as styles from './RecipeStack.css'

interface RecipeStackProps extends BoxProps {
	recipes: Array<Recipe>
}

export const RecipeStack: React.FC<RecipeStackProps> = ({
	recipes,
	...props
}) => (
	<Box className={styles.stack} {...props}>
		{recipes.map((recipe, index) => (
			<RecipeCard key={recipe.id} recipe={recipe} count={index} />
		))}
	</Box>
)
