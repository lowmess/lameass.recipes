import { Recipe, RecipeSection } from './Recipe'

export interface Meal {
	title: string
	slug: string
	description?: string
	prepTime?: number
	cookTime?: number
	yieldAmount?: string
	recipes: Recipe[]
	sections?: RecipeSection[]
}
