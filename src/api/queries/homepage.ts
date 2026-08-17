import { graphql } from "#api/datocms/graphql.ts";
import { MealPreviewFragment } from "#api/queries/meal";

export const getHomepage = graphql(
	`
		query GetHomepage {
			homepage {
				pageTitle
				featuredMeal {
					... on MealRecord {
						...MealPreviewFragment
					}
				}
			}
		}
	`,
	[MealPreviewFragment],
);
