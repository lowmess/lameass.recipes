import { graphql } from "#api/datocms/graphql.ts";

export const SeoFieldsFragment = graphql(`
	fragment SeoFieldsFragment on SeoField @_unmask {
		title
		description
	}
`);
