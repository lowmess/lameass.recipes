import { graphql } from "#api/datocms/graphql.ts";

export const getAllTags = graphql(`
	query GetAllTags {
		allTags {
			id
			title
			slug
		}
	}
`);
