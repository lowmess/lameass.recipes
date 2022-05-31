import * as React from 'react'
import { StructuredText } from 'react-datocms'
import { Recipe } from '../../api'
import { minutesToHours } from '../../utils/time'
import { vars } from '../../styles/_global.css'
import { Box, BoxProps } from '../Box'
import { Flex } from '../Flex'
import { Text } from '../Text'
import { Link } from '../Link'
import * as styles from './RecipeCard.css'

interface RecipeCardProps extends BoxProps {
	recipe: Recipe
	count?: number
	level?: 1 | 2 | 3 | 4 | 5 | 6
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
	recipe,
	count = 0,
	level = 1,
}) => {
	const titleElement = `h${level}` as React.ElementType

	const {
		title,
		slug,
		category,
		prepTime = 0,
		cookTime = 0,
		totalTime = 0,
		servings,
		description,
		tags,
		customProperties,
	} = recipe

	const time = totalTime || prepTime + cookTime

	return (
		<Box
			className={styles.card}
			style={{
				// @ts-expect-error TS doesn't like the setting of custom properties here?
				'--count': count,
				'--category-color': vars.color[category.color],
				...customProperties,
			}}
		>
			<Text component={titleElement} fontSize="xl" fontWeight="regular">
				<Link
					href={`/recipes/${slug}`}
					color={{
						light: category.color || 'inherit',
						hover: 'inherit',
					}}
					textDecoration="none"
				>
					{title}
				</Link>
			</Text>

			<Flex
				marginTop="sm"
				marginBottom="md"
				borderColor={category.color || 'inherit'}
				className={styles.infoRibbon}
			>
				<Link href={`/categories/${category.slug}`} textDecoration="none">
					{category.title}
				</Link>

				{time > 0 && <span>{minutesToHours(time)}</span>}

				{servings && <span>Serves {servings}</span>}
			</Flex>

			<Box className={styles.description}>
				<StructuredText data={description} />
			</Box>

			{tags.length > 0 && (
				<Box marginTop="md">
					{tags.map((tag) => (
						<Link
							key={tag.id}
							href={`/tags/${tag.slug}`}
							fontSize="sm"
							className={styles.tag}
						>
							{tag.title}
						</Link>
					))}
				</Box>
			)}
		</Box>
	)
}
