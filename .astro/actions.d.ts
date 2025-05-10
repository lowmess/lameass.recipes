declare module "astro:actions" {
	type Actions = typeof import("/Users/alomas/Developer/lameass.recipes/src/actions")["server"];

	export const actions: Actions;
}