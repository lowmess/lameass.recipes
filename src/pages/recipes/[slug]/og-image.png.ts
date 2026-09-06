import type { APIContext } from "astro";

import { executeQuery } from "#api/datocms/execute-query.ts";
import { getAllRecipes, getRecipeById } from "#api/queries/recipe.ts";
import { generateOgImage, RecipeOgImage } from "#util/og-image.tsx";

export async function getStaticPaths() {
	const { allRecipes } = await executeQuery(getAllRecipes);

	return allRecipes.map((recipe) => ({
		params: { slug: recipe.slug },
		props: recipe,
	}));
}

export async function GET({ props }: APIContext) {
	const { id } = props;

	if (!id) {
		return new Response(null, {
			status: 404,
			statusText: "No id passed to recipe image route",
		});
	}

	const { recipe } = await executeQuery(getRecipeById, {
		variables: { id },
	});

	if (!recipe) {
		return new Response(null, {
			status: 404,
			statusText: `No recipe found with id ${id}`,
		});
	}

	const png = await generateOgImage(RecipeOgImage({ recipe }));

	return new Response(png as Uint8Array<ArrayBuffer>, {
		headers: { "Content-Type": "image/png" },
	});
}
