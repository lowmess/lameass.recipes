import { graphql } from "#api/datocms/graphql.ts";
import { SeoFieldsFragment } from "#api/queries/fragments";
import { RecipePreviewFragment } from "#api/queries/recipe";

export const MealPreviewFragment = graphql(`
	fragment MealPreviewFragment on MealRecord @_unmask {
		id
		title
		slug
		description {
			value
		}
		prepTime
		cookTime
		serves
		recipes {
			id
			category {
				color
			}
		}
	}
`);

export const getAllMeals = graphql(
	`
		query GetAllMeals {
			allMeals(orderBy: _createdAt_DESC) {
				...MealPreviewFragment
			}
		}
	`,
	[MealPreviewFragment],
);

export const getMealById = graphql(
	`
		query GetMealById($id: ItemId!) {
			meal(filter: { id: { eq: $id } }) {
				# general info
				...MealPreviewFragment

				# get directions and recipe preview info
				recipes {
					... on RecipeRecord {
						...RecipePreviewFragment
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
				seo {
					...SeoFieldsFragment
				}
			}
		}
	`,
	[MealPreviewFragment, RecipePreviewFragment, SeoFieldsFragment],
);
