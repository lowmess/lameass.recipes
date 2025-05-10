import { executeQuery as libExecuteQuery } from "@datocms/cda-client";
import { getSecret } from "astro:env/server";
import type { TadaDocumentNode } from "gql.tada";

/**
 * Executes a GraphQL query using the DatoCMS Content Delivery API, using a
 * different API token depending on whether we want to fetch draft content or
 * published.
 */
export async function executeQuery<Result, Variables>(
	query: TadaDocumentNode<Result, Variables>,
	options?: ExecuteQueryOptions<Variables>,
) {
	const publishedToken = getSecret("DATOCMS_PUBLISHED_CONTENT_CDA_TOKEN");
	const draftToken = getSecret("DATOCMS_PUBLISHED_CONTENT_CDA_TOKEN");

	if (!publishedToken) {
		console.log({ publishedToken });
		throw new Error("No published content token found");
	}

	const result = await libExecuteQuery(query, {
		variables: options?.variables,
		excludeInvalid: true,
		includeDrafts: options?.includeDrafts,
		token: options?.includeDrafts && draftToken ? draftToken : publishedToken,
	});

	return result;
}

type ExecuteQueryOptions<Variables> = {
	variables?: Variables;
	includeDrafts?: boolean;
};
