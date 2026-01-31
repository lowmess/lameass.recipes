import { graphql } from "#api/datocms/graphql.ts";
import { SeoFieldsFragment } from "#api/queries/fragments";
import { RecipePreviewFragment } from "#api/queries/recipe";

export const MealPreviewFragment = graphql(`
	fragment MealPreviewFragment on MealRecord @_unmask {
		id
		title
		slug
		prepTime
		cookTime
		serves
		recipes {
			# only need recipe count for the preview
			id
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
