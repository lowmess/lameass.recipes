import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
	site: "https://lameass.recipes",
	integrations: [sitemap()],
	adapter: vercel(),
});
