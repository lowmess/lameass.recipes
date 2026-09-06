import { generateOgImage, SiteOgImage } from "#util/og-image.tsx";

export async function GET() {
	const png = await generateOgImage(SiteOgImage());

	return new Response(png as Uint8Array<ArrayBuffer>, {
		headers: {
			"Content-Type": "image/png",
		},
	});
}
