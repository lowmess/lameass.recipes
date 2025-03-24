import { graphql } from "#api/datocms/graphql.ts";

export const getSiteMetadata = graphql(`
	query siteMetadata {
		_site {
			globalSeo {
				titleSuffix
				fallbackSeo {
					title
					description
				}
			}
		}
	}
`);
