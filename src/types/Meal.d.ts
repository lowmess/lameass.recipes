import { Recipe, RecipeSection, Tag } from './Recipe'

type MealRecipe = Pick<Recipe, '_id' | 'title' | 'slug'>

export interface Meal {
	title: string
	slug: string
	description?: string
	emojis?: string[]
	tags?: Tag[]
	prepTime?: number
	cookTime?: number
	yieldAmount?: string
	recipes: MealRecipe[]
	equipment?: string[]
	sections?: RecipeSection[]
}
