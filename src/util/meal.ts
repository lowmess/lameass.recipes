import type { FragmentOf } from "#api/datocms/graphql.ts";
import type { RecipePreviewFragment } from "#api/queries/recipe.ts";
import { isColor, type Color } from "#util/colors";
import { getRandomIntegerBetween } from "#util/random";

export function getMealTheme(
	recipes: Array<FragmentOf<typeof RecipePreviewFragment>>,
): `var(--color-${Color})` {
	// duplicates intentionally allowed; more common colors more likely to be theme
	const categoryColorsInMeal = recipes.map((recipe) => recipe.category.color);

	const filteredColors = categoryColorsInMeal.filter(isColor);

	const themeColor =
		filteredColors[getRandomIntegerBetween(0, filteredColors.length - 1)];

	const theme = `var(--color-${themeColor})` as const;

	return theme;
}
