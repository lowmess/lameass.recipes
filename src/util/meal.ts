import type { FragmentOf } from "#api/datocms/graphql.ts";
import type { MealPreviewFragment } from "#api/queries/meal.ts";
import { isColor, type Color } from "#util/colors";
import { getRandomIntegerBetween } from "#util/random";

export function getMealTheme(
	meal: FragmentOf<typeof MealPreviewFragment>,
): `var(--color-${Color})` {
	// duplicates intentionally allowed; more common colors more likely to be theme
	const categoryColorsInMeal = meal.recipes.map(
		(recipe) => recipe.category.color,
	);

	const filteredColors = categoryColorsInMeal.filter(isColor);

	const themeColor =
		filteredColors[getRandomIntegerBetween(0, filteredColors.length - 1)];

	const theme = `var(--color-${themeColor})` as const;

	return theme;
}
