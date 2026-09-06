import type { FragmentOf } from "#api/datocms/graphql.ts";
import type { MealPreviewFragment } from "#api/queries/meal.ts";
import { getColorHex, isColor, type Color } from "#util/colors";
import { getRandomIntegerBetween } from "#util/random";

function getMealColor(meal: FragmentOf<typeof MealPreviewFragment>): Color {
	// duplicates intentionally allowed; more common colors more likely to be theme
	const categoryColorsInMeal = meal.recipes.map(
		(recipe) => recipe.category.color,
	);

	const filteredColors = categoryColorsInMeal.filter(isColor);

	const color =
		filteredColors[getRandomIntegerBetween(0, filteredColors.length - 1)];

	return color;
}

export function getMealTheme(
	meal: FragmentOf<typeof MealPreviewFragment>,
): `var(--color-${Color})` {
	const themeColor = getMealColor(meal);

	const theme = `var(--color-${themeColor})` as const;

	return theme;
}

/** Get light theme hex colors for a meal. Used for OG image generation */
export function getMealHex(
	meal: FragmentOf<typeof MealPreviewFragment>,
): `#${string}` {
	const mealColor = getMealColor(meal);

	return getColorHex(mealColor);
}
