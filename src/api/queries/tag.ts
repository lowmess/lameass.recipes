import { graphql } from "#api/datocms/graphql.ts";

export const getAllTags = graphql(`
	query getAllTags {
		allTags {
			id
			title
			slug
		}
	}
`);
