import * as React from 'react'
import { Box, Heading } from 'theme-ui'
import minutesToHours from '../../lib/minutesToHours'
import { Meal } from '../types/Meal'
import { ThemeUIProps } from '../types/ThemeUIComponent'

interface MealPreviewProps extends ThemeUIProps {
	meal: Meal
}

const MealPreview: React.FC<MealPreviewProps> = ({ meal, sx, ...props }) => {
	const { title, recipes, prepTime = 0, cookTime = 0 } = meal

	const totalTime = prepTime + cookTime

	const emojis = Array.from(
		new Set(recipes.map((recipe) => recipe.category.emoji))
	)

	const tags = recipes
		.flatMap((r) => r.tags)
		.filter((t) => t)
		.reduce((acc, cur) => {
			const newTags = [...acc]

			const exists = acc.find((tag) => tag.slug === cur.slug)

			if (!exists) newTags.push(cur)

			return newTags
		}, [])

	return (
		<Box
			sx={{
				border: 1,
				borderColor: 'border',
				borderRadius: 2,
				padding: 4,

				...sx,
			}}
			{...props}
		>
			<Heading sx={{ fontSize: [4, 4, 4, 4] }}>{title}</Heading>

			<p>Emojis: {emojis}</p>

			<p>Total time: {minutesToHours(totalTime)}</p>

			<p>Tags:</p>

			<ul>
				{tags.map((tag) => (
					<li key={tag._id}>{tag.title}</li>
				))}
			</ul>
		</Box>
	)
}

export default MealPreview
