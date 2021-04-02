/* eslint-disable import/exports-last */
import sanityClient from '@sanity/client'
import smartypants from '../utils/smartypants'
import mdToHTML from '../utils/markdown'
import { Category, Meal, Recipe, Tag } from '../types/api'
import formatRecipe from './formatRecipe'
import formatMeal from './formatMeal'

const client = sanityClient({
	apiVersion: '2021-03-01',
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
	'prepTime': prep_time
`

const mealFields = `
	_id,
	title,
	'slug': slug.current,
	description,
	'cookTime': cook_time,
	'prepTime': prep_time,
	recipes[]->{${recipeFields}}
`

type Homepage = {
	headline: string
	featuredMeal: Meal
	recentRecipes: Recipe[]
}

export const getHomepage = async (): Promise<Homepage> => {
	const data = await client.fetch(`
		*[_type == 'homepage'] {
			headline,
			'featuredMeal': featured_meal->{${mealFields}},
			'recentRecipes': *[_type == 'recipe'] | order(_createdAt desc) {${recipeFields}}[0...6]
		}[0]
	`)

	return {
		...data,
		headline: smartypants(data.headline),
		featuredMeal: formatMeal(data.featuredMeal),
	}
}

type AboutPage = {
	title: string
	content: string
}

export const getAboutPage = async (): Promise<AboutPage> => {
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

export const getAllRecipes = async (): Promise<Recipe[]> => {
	const data = await client.fetch(`
		*[_type == 'recipe'] | order(_createdAt desc) {
			${recipeFields},
			'searchTerms': search_terms
		}
	`)

	return data.map((recipe) => ({
		...recipe,
		title: smartypants(recipe.title),
	}))
}

export const getRecipeBySlug = async (slug: string): Promise<Recipe> => {
	const data = await client.fetch(
		`
			*[_type == 'recipe' && slug.current == $slug] {
				${recipeFields},
				'yieldAmount': yield_amount,
				'yieldType': yield_type,
				equipment,
				ingredients,
				sections[] { _key, title, steps},
				notes,
				'similarRecipes': *[_type == 'recipe' && category._ref == ^.category._ref && slug.current != ^.slug.current] {${recipeFields}}
			}[0]
		`,
		{ slug }
	)

	return formatRecipe(data)
}

export const getAllMeals = async (): Promise<Meal[]> => {
	const data = await client.fetch(`
		*[_type == 'meal'] | order(_createdAt desc) {
			${mealFields}
		}
	`)

	return data.map(formatMeal)
}

export const getMealBySlug = async (slug: string): Promise<Meal> => {
	const data = await client.fetch(
		`
			*[_type == 'meal' && slug.current == $slug] {
				${mealFields},
				'yieldAmount': yield_amount,
				sections[] { _key, title, steps }
			}[0]
		`,
		{ slug }
	)

	return formatMeal(data)
}

export const getAllCategories = async (): Promise<Category[]> => {
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

export const getCategoryBySlug = async (slug: string): Promise<Category> => {
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

export const getAllTags = async (): Promise<Tag[]> => {
	const data = await client.fetch(`
		*[_type == 'tag'] | order(title) {
			_id,
			title,
			'slug': slug.current
		}
	`)

	return data
}

export const getTagBySlug = async (slug: string): Promise<Tag> => {
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
