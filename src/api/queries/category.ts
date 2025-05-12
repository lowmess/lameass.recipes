import { graphql } from "#api/datocms/graphql.ts";

export const getAllCategories = graphql(`
	query getAllCategories {
		allCategories(orderBy: title_ASC) {
			id
			title
			slug
			color
		}
	}
`);
