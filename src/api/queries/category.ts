import { graphql } from "#api/datocms/graphql.ts";

export const getAllCategories = graphql(`
	query getAllCategories {
		allCategories {
			id
			title
			slug
			color
		}
	}
`);
