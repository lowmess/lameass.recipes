import * as React from 'react'
import { default as NextLink } from 'next/link'
import { Box, Flex, Grid, Text, Heading, Link } from 'theme-ui'
import { Clock } from 'phosphor-react'
import minutesToHours from '../../lib/minutesToHours'
import * as styles from '../constants/styles/stripedList'
import { Meal } from '../types/Meal'
import { ThemeUIProps } from '../types/ThemeUIComponent'
import Inline from './Inline'

interface MealPreviewProps extends ThemeUIProps {
	meal: Meal
}

const MealPreview: React.FC<MealPreviewProps> = ({ meal, sx, ...props }) => {
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

	return (
		<Box
			sx={{
				position: 'relative',
				border: 1,
				borderColor: 'border',
				borderRadius: 2,

				...sx,
			}}
			{...props}
		>
			<Box
				sx={{
					position: 'absolute',
					top: 0,
					right: [0, null, 'auto'],
					bottom: [null, null, 0],
					left: 0,
					width: [null, null, '2rem'],
					height: ['2rem', null, 'auto'],
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
					<Heading variant="meal-name">
						<NextLink href={`/meals/${slug}`} passHref>
							<Link variant="ui">{title}</Link>
						</NextLink>
					</Heading>

					<Text as="p" sx={{ marginTop: 2, marginBottom: 1, fontSize: 2 }}>
						{emojis.map((emoji) => (
							<span key={emoji}>{emoji}</span>
						))}
					</Text>

					<Text
						as="p"
						sx={{
							maxWidth: 'measure',
							marginTop: 0,
							marginBottom: tags.length || totalTime > 0 ? 4 : 0,
						}}
						dangerouslySetInnerHTML={{ __html: description }}
					/>

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
						padding: [3, 4],
						paddingBottom: 3,
						backgroundColor: 'muted',
					}}
				>
					<Heading variant="section-heading">Recipes</Heading>

					<Box as="ul" sx={styles.stripedList}>
						{recipes.map((recipe) => (
							<Box
								key={recipe._id}
								as="li"
								sx={styles.getStripedListItemStyles('background')}
							>
								<NextLink href={`/recipes/${recipe.slug}`} passHref>
									<Link variant="ui">{recipe.title}</Link>
								</NextLink>
							</Box>
						))}
					</Box>
				</Box>
			</Grid>
		</Box>
	)
}

export default MealPreview
