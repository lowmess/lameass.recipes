import { graphql } from "#api/datocms/graphql.ts";

export const getAllCategories = graphql(`
	query GetAllCategories {
		allCategories(orderBy: title_ASC) {
			id
			title
			slug
			color
		}
	}
`);
