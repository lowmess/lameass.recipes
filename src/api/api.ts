import { GraphQLClient, gql } from 'graphql-request'
import { StructuredText } from 'datocms-structured-text-utils'
import { getCustomProperties } from './customProperties'

const client = new GraphQLClient(`https://graphql.datocms.com/`, {
	headers: { authorization: `Bearer ${process.env.DATO_API_TOKEN}` },
})

// maybe not the best way to do this? idk. seems weird to create a new client
// for every method though, which is the other way
const setPreviewEndpoint = (preview: boolean) => {
	if (preview) {
		client.setEndpoint(`https://graphql.datocms.com/preview`)
	}
}

type APIMethod<T> = (preview: boolean) => Promise<T>

export type SEO = {
	title: string
	description?: string
}

export type Category = {
	id: string
	title: string
	slug: string
	color?:
		| 'gray'
		| 'red'
		| 'pink'
		| 'fuschia'
		| 'indigo'
		| 'violet'
		| 'blue'
		| 'cyan'
		| 'teal'
		| 'green'
		| 'lime'
		| 'yellow'
		| 'orange'
}

export type Tag = {
	id: string
	title: string
	slug: string
}

export type Recipe = {
	id: string
	title: string
	slug: string
	category: Category
	description?: StructuredText
	tags?: Array<Tag>
	prepTime?: number
	cookTime?: number
	totalTime?: number
	servings?: number
	equipment?: StructuredText
	ingredients: StructuredText
	directions: StructuredText
	notes?: StructuredText
	searchTerms?: string
	pairsWith?: Array<Recipe>
	seo?: SEO
	customProperties?: {
		xOffset: string
		rotate: string
	}
}

const recipePreviewFragment = gql`
	fragment recipePreview on RecipeRecord {
		id
		title
		slug
		category {
			id
			title
			slug
			color
		}
		description {
			blocks
			links
			value
		}
		tags {
			id
			title
			slug
		}
		prepTime
		cookTime
		totalTime
		servings
		searchTerms
	}
`

export const getRecentRecipes: APIMethod<Array<Recipe>> = async (
	preview = false
) => {
	setPreviewEndpoint(preview)

	const query = gql`
		${recipePreviewFragment}

		query getRecentRecipes {
			allRecipes(first: 5) {
				...recipePreview
			}
		}
	`

	const { allRecipes } = await client.request(query)

	return allRecipes.map((recipe) => ({
		...recipe,
		customProperties: getCustomProperties(),
	}))
}

export const getAllRecipes: APIMethod<Array<Recipe>> = async (
	preview = false
) => {
	setPreviewEndpoint(preview)

	const query = gql`
		${recipePreviewFragment}

		query getAllRecipes {
			allRecipes(first: 100) {
				...recipePreview
			}
		}
	`

	const { allRecipes } = await client.request(query)

	return allRecipes.map((recipe) => ({
		...recipe,
		customProperties: getCustomProperties(),
	}))
}
