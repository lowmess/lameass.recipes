import { executeQuery } from "#api/datocms/execute-query.ts";
import { getAllRecipes } from "#api/queries/recipe.ts";
import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { render } from "datocms-structured-text-to-plain-text";
import Fuse from "fuse.js";

export const search = {
	recipes: defineAction({
		accept: "form",

		input: z.object({
			query: z.string().optional(),
		}),

		handler: async (input) => {
			const { allRecipes } = await executeQuery(getAllRecipes);

			const fuse = new Fuse(allRecipes, {
				threshold: 0.3,
				keys: [
					{ name: "title", weight: 1.0 },
					{ name: "searchTerms", weight: 0.9 },
					{ name: "category.title", weight: 0.5 },
					{ name: "tags.title", weight: 0.4 },
					{
						name: "ingredients",
						weight: 0.2,
						getFn: (recipe) => render(recipe.ingredients) || "",
					},
				],
			});

			const result = fuse.search(input.query || "");

			return result.map((hit) => hit.item.id);
		},
	}),
};
