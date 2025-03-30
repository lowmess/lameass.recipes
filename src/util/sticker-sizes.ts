import { Category } from "#types/category.ts";

type SizeMap = {
	/** size difference in comparison to main dish sticker */
	vertical: number;
	horizontal: number;

	/** size difference for outline of sticker, compared to itself */
	verticalOutline: number;
	horizontalOutline: number;
};

export const categorySizeMap: Record<Category, SizeMap> = {
	[Category.MainDish]: {
		vertical: 1,
		horizontal: 1,

		verticalOutline: -9.13,
		horizontalOutline: -9.16,
	},

	[Category.SideDish]: {
		vertical: 0.94,
		horizontal: 0.88,

		verticalOutline: -9.07,
		horizontalOutline: -9.06,
	},

	[Category.Dessert]: {
		vertical: 0.94,
		horizontal: 0.9,

		verticalOutline: -9.08,
		horizontalOutline: -9.08,
	},

	[Category.Snack]: {
		vertical: 0.76,
		horizontal: 0.72,

		verticalOutline: -8.88,
		horizontalOutline: -8.88,
	},

	[Category.Cocktail]: {
		vertical: 0.57,
		horizontal: 1.13,

		verticalOutline: -8.55,
		horizontalOutline: -9.25,
	},

	[Category.Ingredient]: {
		vertical: 0.3,
		horizontal: 1.5,

		verticalOutline: -7.56,
		horizontalOutline: -9.43,
	},
};

export function getCategorySizeMap(category: Category) {
	return categorySizeMap[category];
}
