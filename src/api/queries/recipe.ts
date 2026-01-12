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
		ingredients {
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
		yields {
			amount
			unit
		}
		searchTerms
	}
`);

export const getAllRecipes = graphql(
	`
		query GetAllRecipes {
			allRecipes(orderBy: _createdAt_DESC) {
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

export const getRecipesByCategory = graphql(
	`
		query GetRecipesByTag($categoryId: ItemId!) {
			allRecipes(
				orderBy: _createdAt_DESC
				filter: { category: { eq: $categoryId } }
			) {
				...RecipePreviewFragment
			}
		}
	`,
	[RecipePreviewFragment],
);

export const getRecipesByTag = graphql(
	`
		query GetRecipesByTag($tagId: ItemId!) {
			allRecipes(
				orderBy: _createdAt_DESC
				filter: { tags: { allIn: [$tagId] } }
			) {
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
				author {
					name
				}
				equipment {
					value
				}
				ingredients {
					value
					links {
						... on RecipeRecord {
							__typename
							id
							slug
						}
					}
				}
				directions {
					value
					links {
						... on RecipeRecord {
							__typename
							id
							slug
						}
					}
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
