import { Category } from "#types/category.ts";

export const plurals: Record<Category, string> = {
	[Category.Cocktail]: "Cocktails",
	[Category.Dessert]: "Desserts",
	[Category.Ingredient]: "Ingredients",
	[Category.MainDish]: "Main Dishes",
	[Category.SideDish]: "Side Dishes",
	[Category.Snack]: "Snacks",
};
