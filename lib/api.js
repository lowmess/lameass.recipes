/* eslint-disable import/exports-last */
import sanityClient from '@sanity/client'
import smartypants from './smartypants'
import mdToHTML from './markdown'
import formatRecipe from './formatRecipe'

const client = sanityClient({
	dataset: 'production',
	projectId: process.env.SANITY_PROJECT_ID,
	useCdn: process.env.NODE_ENV === 'production',
})

const recipeFields = `
	_id,
	title,
	'slug': slug.current,
  category -> { title, 'slug': slug.current, emoji },
	tags[] -> { _id, title, 'slug': slug.current },
	'cookTime': cook_time,
	'prepTime': prep_time,
	'yieldAmount': yield_amount,
	'yieldType': yield_type,
	equipment,
	ingredients,
	sections[] { _key, title, steps},
  notes,
`

export const getHomepage = async () => {
	const data = await client.fetch(`
		*[_type == 'homepage'] {
			headline,
			'featuredMealHeading': featured_meal_heading,
			'featuredMeal': featured_meal,
			'recentRecipes': *[_type == 'recipe'] | order(_createdAt desc) {${recipeFields}}[0...6]
		}[0]
	`)

	return {
		...data,
		headline: smartypants(data.headline),
	}
}

export const getAboutPage = async () => {
	const data = await client.fetch(`
		*[_type == 'about_page'] {
			title,
			content
		}[0]
	`)

	return {
		title: smartypants(data.title),
		content: mdToHTML(data.content),
	}
}

export const getAllRecipes = async () => {
	const data = await client.fetch(`
		*[_type == 'recipe'] | order(_createdAt desc) {
			${recipeFields}
		}
	`)

	return data.map(formatRecipe)
}

export const getRecipeBySlug = async (slug) => {
	const data = await client.fetch(
		`
			*[_type == 'recipe' && slug.current == $slug] {
				${recipeFields}
				'similarRecipes': *[_type == 'recipe' && category._ref == ^.category._ref && slug.current != ^.slug.current] {${recipeFields}}
			}[0]
		`,
		{ slug }
	)

	return formatRecipe(data)
}

export const getAllCategories = async () => {
	const data = await client.fetch(`
		*[_type == 'category'] | order(title) {
			_id,
			title,
			emoji,
			'slug': slug.current
		}
	`)

	return data
}

export const getCategoryBySlug = async (slug) => {
	const data = await client.fetch(
		`
			*[_type == 'category' && slug.current == $slug] {
				_id,
				title,
				emoji,
				'slug': slug.current,
				'recipes': *[_type == 'recipe' && references(^._id)] | order(_createdAt desc) {${recipeFields}}
			}[0]
		`,
		{ slug }
	)

	return {
		...data,
		recipes: data?.recipes?.map(formatRecipe),
	}
}

export const getAllTags = async () => {
	const data = await client.fetch(`
		*[_type == 'tag'] | order(title) {
			_id,
			title,
			'slug': slug.current
		}
	`)

	return data
}

export const getTagBySlug = async (slug) => {
	const data = await client.fetch(
		`
			*[_type == 'tag' && slug.current == $slug] {
				_id,
				title,
				'slug': slug.current,
				'recipes': *[_type == 'recipe' && references(^._id)] | order(_createdAt desc) {${recipeFields}}
			}[0]
		`,
		{ slug }
	)

	return {
		...data,
		recipes: data?.recipes?.map(formatRecipe),
	}
}
