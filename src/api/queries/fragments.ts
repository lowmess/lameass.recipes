import { graphql } from "#api/datocms/graphql.ts";

export const SeoFieldsFragment = graphql(`
	fragment SeoFields on SeoField @_unmask {
		title
		description
	}
`);
