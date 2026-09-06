import type { APIContext } from "astro";

import { executeQuery } from "#api/datocms/execute-query.ts";
import { getAllMeals, getMealById } from "#api/queries/meal.ts";
import { generateOgImage, MealOgImage } from "#util/og-image.tsx";

export async function getStaticPaths() {
	const { allMeals } = await executeQuery(getAllMeals);

	return allMeals.map((meal) => ({
		params: { slug: meal.slug },
		props: meal,
	}));
}

export async function GET({ props }: APIContext) {
	const { id } = props;

	if (!id) {
		return new Response(null, {
			status: 404,
			statusText: "No id passed to meal image route",
		});
	}

	const { meal } = await executeQuery(getMealById, {
		variables: { id },
	});

	if (!meal) {
		return new Response(null, {
			status: 404,
			statusText: `No meal found with id ${id}`,
		});
	}

	const png = await generateOgImage(MealOgImage({ meal }));

	return new Response(png as Uint8Array<ArrayBuffer>, {
		headers: { "Content-Type": "image/png" },
	});
}
