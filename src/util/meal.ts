import type { FragmentOf } from "#api/datocms/graphql.ts";
import type { MealPreviewFragment } from "#api/queries/meal.ts";
import { isColor, type Color } from "#util/colors";
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

export function getMealHex(
	meal: FragmentOf<typeof MealPreviewFragment>,
): `#${string}` {
	const mealColor = getMealColor(meal);

	switch (mealColor) {
		case "red":
			return "#f94838" as const;

		case "pink":
			return "#fa3989" as const;

		case "violet":
			return "#ba5bfd" as const;

		case "blue":
			return "#3887f7" as const;

		case "cyan":
			return "#2497a0" as const;

		case "teal":
			return "#239b6a" as const;

		case "green":
			return "#249e2e" as const;

		case "yellow":
			return "#d7c30f" as const;

		case "orange":
			return "#d69231" as const;

		default:
			return mealColor satisfies never;
	}
}
