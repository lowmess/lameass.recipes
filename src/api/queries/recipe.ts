import { graphql } from "#api/datocms/graphql.ts";
import { SeoFieldsFragment } from "./fragments";

export const RecipePreviewFragment = graphql(`
	fragment RecipePreviewFragment on RecipeRecord @_unmask {
		id
		title
		slug
		category {
			id
			title
			slug
			color
		}
		description {
			value
		}
		tags {
			id
			title
			slug
		}
		prepTime
		cookTime
		totalTime
		servings
		searchTerms
	}
`);

export const getAllRecipes = graphql(
	`
		query GetAllRecipes {
			allRecipes {
				...RecipePreviewFragment
			}
		}
	`,
	[RecipePreviewFragment],
);

export const getRecentRecipes = graphql(
	`
		query GetRecentRecipes {
			allRecipes(first: 5, orderBy: _createdAt_DESC) {
				...RecipePreviewFragment
			}
		}
	`,
	[RecipePreviewFragment],
);

export const getRecipeById = graphql(
	`
		query GetRecipeById($id: ItemId!) {
			recipe(filter: { id: { eq: $id } }) {
				# common fields
				...RecipePreviewFragment

				# individual-specific fields
				equipment {
					blocks
					links
					value
				}
				ingredients {
					links {
						... on RecipeRecord {
							id
							slug
							__typename
						}
					}
					value
				}
				directions {
					value
				}
				notes {
					value
				}
				pairsWith {
					...RecipePreviewFragment
				}

				seo {
					...SeoFieldsFragment
				}
			}
		}
	`,
	[RecipePreviewFragment, SeoFieldsFragment],
);
