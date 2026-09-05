import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
	site: "https://lameass.recipes",
	integrations: [sitemap()],
	adapter: vercel(),
	fonts: [
		{
			name: "Henrietta",
			cssVariable: "--font-family-henrietta",
			provider: fontProviders.local(),
			options: {
				variants: [
					{
						src: ["./src/assets/fonts/VCHenrietta-Regular.woff2"],
						weight: "400",
						style: "normal",
					},
					{
						src: ["./src/assets/fonts/VCHenrietta-RegularItalic.woff2"],
						weight: "400",
						style: "italic",
					},
					{
						src: ["./src/assets/fonts/VCHenrietta-Medium.woff2"],
						weight: "500",
						style: "normal",
					},
					{
						src: ["./src/assets/fonts/VCHenrietta-MediumItalic.woff2"],
						weight: "500",
						style: "italic",
					},
					{
						src: ["./src/assets/fonts/VCHenrietta-SemiBold.woff2"],
						weight: "600",
						style: "normal",
					},
					{
						src: ["./src/assets/fonts/VCHenrietta-SemiBoldItalic.woff2"],
						weight: "600",
						style: "italic",
					},
				],
			},
			fallbacks: ["Georgia", "ui-serif", "serif"],
		},
		{
			name: "Basier Mono",
			cssVariable: "--font-family-basier-mono",
			provider: fontProviders.local(),
			options: {
				variants: [
					{
						src: ["./src/assets/fonts/basiercirclemono-regular-webfont.woff2"],
						weight: "400",
						style: "normal",
					},
					{
						src: [
							"./src/assets/fonts/basiercirclemono-regularitalic-webfont.woff2",
						],
						weight: "400",
						style: "italic",
					},
					{
						src: ["./src/assets/fonts/basiercirclemono-bold-webfont.woff2"],
						weight: "700",
						style: "normal",
					},
					{
						src: [
							"./src/assets/fonts/basiercirclemono-bolditalic-webfont.woff2",
						],
						weight: "700",
						style: "italic",
					},
				],
			},
			fallbacks: ["Menlo", "ui-monospace", "monospace"],
		},
		{
			name: "Rock Salt",
			cssVariable: "--font-family-rock-salt",
			provider: fontProviders.fontsource(),
			styles: ["normal"],
			weights: ["400"],
			subsets: ["latin"],
			fallbacks: ["Brush Script MT", "cursive"],
		},
	],
});
