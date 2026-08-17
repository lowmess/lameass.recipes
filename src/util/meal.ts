import { isColor, type Color } from "#util/colors";
import { getRandomIntegerBetween } from "#util/random";

/** @todo: figure out why FragmentOf<RecipePreviewFragment> was not working here */
type partialRecipeWithCategory = {
	category: {
		color: string;
	};
};

export function getMealTheme(
	recipes: Array<partialRecipeWithCategory>,
): `var(--color-${Color})` {
	// duplicates intentionally allowed; more common colors more likely to be theme
	const categoryColorsInMeal = recipes.map((recipe) => recipe.category.color);

	const filteredColors = categoryColorsInMeal.filter(isColor);

	const themeColor =
		filteredColors[getRandomIntegerBetween(0, filteredColors.length - 1)];

	const theme = `var(--color-${themeColor})` as const;

	return theme;
}
