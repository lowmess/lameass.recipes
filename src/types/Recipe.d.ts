export type RecipeSection = {
	_key: string
	title: string
	steps: string[]
}

export type Category = {
	_id: string
	title: string
	emoji: string
	slug: string
	recipes: Recipe[]
}

export type Tag = {
	_id: string
	title: string
	slug: string
	recipes: Recipe[]
}

export interface Recipe {
	_id: string
	slug: string
	title: string
	category?: Omit<Category, 'recipes'>
	tags?: Omit<Tag, 'recipes'>[]
	prepTime?: number
	cookTime?: number
	yieldAmount?: string
	yieldType?: 'servings' | 'amount'
	equipment?: string[]
	ingredients?: string[]
	sections?: RecipeSection[]
	notes?: string
	similarRecipes?: Recipe[]
	searchTerms?: string
}
