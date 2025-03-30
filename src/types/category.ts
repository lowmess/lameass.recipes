export const Category = Object.freeze({
	MainDish: "main-dish",
	SideDish: "side-dish",
	Dessert: "dessert",
	Snack: "snack",
	Cocktail: "cocktail",
	Ingredient: "ingredient",
});

export type Category = (typeof Category)[keyof typeof Category];
