import * as React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Box, Flex, Text, Heading, Button, Label, Input } from 'theme-ui'
import { MagnifyingGlass, X } from 'phosphor-react'
import { VisuallyHidden } from '@reach/visually-hidden'
import Highlight from '../../components/Highlight'
import RecipeGrid from '../../components/RecipeGrid'
import metadata from '../../constants/metadata.json'
import { getAllRecipes } from '../../api'
import { Recipe } from '../../types/api'

const PUNC_RE = /[^ \w]/g

type SearchItem = {
	_id: string
	data: string
}

interface RecipePageProps {
	recipes: Recipe[]
	searchData: SearchItem[]
}

const RecipePage: React.FC<RecipePageProps> = ({ recipes, searchData }) => {
	const [value, setValue] = React.useState('')

	const matchingIds = searchData
		.filter((d) => d.data.includes(value.replace(PUNC_RE, '').toLowerCase()))
		.map((d) => d._id)

	const filteredRecipes = recipes.filter((r) => matchingIds.includes(r._id))

	return (
		<React.Fragment>
			<Head>
				<title key="title">All recipes {metadata.titleSuffix}</title>
				<meta name="description" content={metadata.description} />
			</Head>

			<Heading as="h1" variant="page-name" my={[5, null, 6]}>
				<Highlight>All recipes</Highlight>
			</Heading>

			<Flex
				sx={{
					flexDirection: ['column', 'row'],
					alignItems: 'baseline',
					marginBottom: 2,
				}}
			>
				<Label
					htmlFor="recipe-search"
					sx={{
						width: 'max-content',
						marginRight: [null, 2, 3],
					}}
				>
					Search {recipes.length} recipes
				</Label>

				<Text
					as="p"
					variant="forms.hint"
					id="recipe-search-hint"
					sx={{
						flex: 1,
					}}
				>
					e.g. &ldquo;Mexican&rdquo; or &ldquo;chicken&rdquo;
				</Text>
			</Flex>

			<Box
				variant="forms.input"
				sx={{
					position: 'relative',
					marginBottom: 4,
					fontSize: 2,
				}}
			>
				<Box
					sx={{
						display: 'contents',

						svg: {
							position: 'absolute',
							top: 'calc(50% - 0.5em)',
							left: 3,
							color: 'muted-text',
						},
					}}
				>
					<MagnifyingGlass weight="bold" />
				</Box>

				<Input
					variant="invisible-input"
					id="recipe-search"
					value={value}
					onChange={(event) => {
						setValue(event.target.value)
					}}
					aria-describedby="recipe-search-hint"
					sx={{
						paddingX: (theme) => `calc(${theme.space[3]} + ${theme.space[4]})`,
					}}
				/>

				<Button
					className="clear"
					onClick={() => {
						setValue('')
					}}
					sx={{
						position: 'absolute',
						top: 'calc(50% - 0.75rem)',
						right: 3,
						display: value ? 'inline-flex' : 'none',
						width: '1.5rem',
						height: '1.5rem',
						appearance: 'none',
						border: 0,
						borderRadius: '100%',
						padding: 0,
						backgroundColor: 'rgba(0, 0, 0, 0.25)',
						color: 'muted-text',
						cursor: 'pointer',

						'&:focus': {
							display: 'inline-flex',
						},

						svg: {
							margin: 'auto',
							fontSize: '0.75rem',
							color: 'muted-text',
						},
					}}
				>
					<VisuallyHidden>Clear Input</VisuallyHidden>

					<X weight="bold" />
				</Button>
			</Box>

			<RecipeGrid mb={5} recipes={filteredRecipes} level="h2" />
		</React.Fragment>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const recipes = await getAllRecipes()

	const searchData = recipes.map((recipe: Recipe) => {
		const tags = recipe.tags?.map((t) => t.title).join(' ') || ''

		const data = `${recipe.title} ${recipe.category.title} ${
			recipe.category.emoji
		} ${tags} ${recipe.searchTerms || ''}`
			.replace(PUNC_RE, '')
			.toLowerCase()

		return {
			_id: recipe._id,
			data,
		}
	})

	return {
		props: { recipes, searchData },
	}
}

export default RecipePage
