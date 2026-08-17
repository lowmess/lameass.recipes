export const Category = Object.freeze({
	MainDish: "main-dish",
	SideDish: "side-dish",
	Dessert: "dessert",
	Snack: "snack",
	Cocktail: "cocktail",
	Ingredient: "ingredient",
} as const);

export type Category = (typeof Category)[keyof typeof Category];
