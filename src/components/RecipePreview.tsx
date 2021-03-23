import * as React from 'react'
import { default as NextLink } from 'next/link'
import { Box, Flex, Card, Heading, Text, Link } from 'theme-ui'
import { CardProps } from '@theme-ui/components'
import { Clock } from 'phosphor-react'
import unwidow from '../../lib/unwidow'
import minutesToHours from '../../lib/minutesToHours'
import { Recipe } from '../types/Recipe'
import Inline from './Inline'

interface RecipePreviewProps extends CardProps {
	recipe: Recipe
	level?: 'h2' | 'h3' | 'h4' | 'h5' | 'h5'
}

const RecipePreview: React.FC<RecipePreviewProps> = ({
	recipe,
	level = 'h3',
	sx,
	...props
}) => {
	const {
		title,
		slug,
		category,
		tags = [],
		prepTime = 0,
		cookTime = 0,
	} = recipe

	const totalTime = prepTime + cookTime

	return (
		<Card sx={{ padding: 3, ...sx }} {...props}>
			<Box
				sx={{
					position: 'absolute',
					top: '-1px',
					right: '-1px',
					left: '-1px',
					height: '2rem',
					borderTopLeftRadius: 2,
					borderTopRightRadius: 2,
					backgroundColor: 'primary',
				}}
			/>

			<Flex
				sx={{ flexDirection: 'column', height: '100%', position: 'relative' }}
			>
				<Text sx={{ fontSize: 5, lineHeight: 'solid' }} aria-hidden>
					{category.emoji}
				</Text>

				<Heading as={level} variant="recipe-name" mt={2}>
					<NextLink href={`/recipes/${slug}`} passHref>
						<Link variant="ui">{unwidow(title)}</Link>
					</NextLink>
				</Heading>

				<Text
					sx={{
						marginTop: 1,
						marginBottom: tags.length || totalTime > 0 ? 4 : 0,
					}}
				>
					<NextLink href={`/categories/${category.slug}`} passHref>
						<Link
							variant="category"
							sx={{
								marginTop: 1,
								marginBottom: tags.length || totalTime > 0 ? 4 : 0,
							}}
						>
							{category.title}
						</Link>
					</NextLink>
				</Text>

				<Box mt="auto">
					{tags.length > 0 && (
						<Inline gap={2}>
							{tags.map((tag) => (
								<NextLink key={tag._id} href={`/tags/${tag.slug}`} passHref>
									<Link variant="tag">{tag.title}</Link>
								</NextLink>
							))}
						</Inline>
					)}

					{totalTime > 0 && (
						<Text
							sx={{
								display: 'inline-flex',
								alignItems: 'center',
								marginTop: tags.length > 0 ? 2 : null,
								fontSize: 0,
								color: 'muted-text',

								svg: {
									marginRight: 2,
									fontSize: 1,
								},
							}}
						>
							<Clock /> {minutesToHours(totalTime)}
						</Text>
					)}
				</Box>
			</Flex>
		</Card>
	)
}

export default RecipePreview
