type RecipePiece = {
	id: string
	value: string
}

export type Category = {
	id: string
	title: string
	emoji: string
	slug: string
}

export type Tag = {
	id: string
	title: string
	slug: string
}

export interface Recipe {
	id: string
	slug: string
	title: string
	category?: Category
	tags?: Tag[]
	prepTime?: number
	cookTime?: number
	yieldAmount?: string
	yieldType?: 'servings' | 'amount'
	ingredients?: RecipePiece[]
	steps?: RecipePiece[]
	notes?: string
}
