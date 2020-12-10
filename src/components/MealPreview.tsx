import * as React from 'react'
import { default as NextLink } from 'next/link'
import { Box, Flex, Grid, Text, Card, Heading, Link } from 'theme-ui'
import { Clock } from 'phosphor-react'
import minutesToHours from '../../lib/minutesToHours'
import * as listStyles from '../constants/styles/stripedList'
import * as nestedStyles from '../constants/styles/nested'
import { Meal } from '../types/Meal'
import { ThemeUIProps } from '../types/ThemeUIComponent'
import Inline from './Inline'

type level = 'h2' | 'h3' | 'h4' | 'h5' | 'h5'

interface MealPreviewProps extends ThemeUIProps {
	meal: Meal
	levels?: [level, level]
}

const MealPreview: React.FC<MealPreviewProps> = ({
	meal,
	levels = ['h3', 'h4'],
	...props
}) => {
	const {
		title,
		slug,
		description,
		emojis,
		tags,
		prepTime = 0,
		cookTime = 0,
		recipes,
	} = meal

	const totalTime = prepTime + cookTime

	const [level, nestedLevel] = levels

	return (
		<Card {...props}>
			<Box
				sx={{
					position: 'absolute',
					top: '-1px',
					right: ['-1px', null, 'auto'],
					bottom: [null, null, '-1px'],
					left: '-1px',
					width: [null, null, '2rem'],
					height: ['2rem', null, 'auto'],
					borderTopLeftRadius: 2,
					borderTopRightRadius: [2, null, 0],
					borderBottomLeftRadius: [null, null, 2],
					backgroundColor: 'primary',
				}}
			/>

			<Grid
				gap={4}
				columns={[1, null, null, '1fr 20rem']}
				sx={{ position: 'relative' }}
			>
				<Flex
					sx={{
						flexDirection: 'column',
						paddingTop: [5, 5, 4],
						paddingRight: [3, 4, 0],
						paddingBottom: 4,
						paddingLeft: [3, 4, 5],
					}}
				>
					<Heading
						as={level}
						variant="meal-name"
						sx={{
							// match baseline to "Recipes" in sidebar:
							marginTop: [null, null, null, '-0.75rem'],
						}}
					>
						<NextLink href={`/meals/${slug}`} passHref>
							<Link variant="ui">{title}</Link>
						</NextLink>
					</Heading>

					<Text as="p" sx={{ marginTop: 2, marginBottom: 3, fontSize: 2 }}>
						{emojis.map((emoji) => (
							<span key={emoji}>{emoji}</span>
						))}
					</Text>

					{description && (
						<Box
							sx={{
								marginTop: 0,
								marginBottom: tags.length || totalTime > 0 ? 4 : 0,

								...nestedStyles.paragraphs,
							}}
							dangerouslySetInnerHTML={{ __html: description }}
						/>
					)}

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

				<Box
					sx={{
						display: ['none', null, null, 'block'],
						padding: 4, // [3, 4]
						paddingBottom: 3, // [3, 3]
						backgroundColor: 'muted',
					}}
				>
					<Heading as={nestedLevel} variant="section-heading">
						Recipes
					</Heading>

					<Box as="ul" sx={listStyles.stripedList}>
						{recipes.map((recipe) => (
							<Box
								key={recipe._id}
								as="li"
								sx={listStyles.getStripedListItemStyles('background')}
							>
								<NextLink href={`/recipes/${recipe.slug}`} passHref>
									<Link variant="ui">{recipe.title}</Link>
								</NextLink>
							</Box>
						))}
					</Box>
				</Box>
			</Grid>
		</Card>
	)
}

export default MealPreview
