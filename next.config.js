const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')

const withVanillaExtract = createVanillaExtractPlugin()

const contentSecurityPolicy = `
	default-src 'self';
	script-src 'self' 'unsafe-eval' 'unsafe-inline';
	child-src 'none';
	style-src 'self' 'unsafe-inline';
	img-src 'self' blob: data:;
	media-src 'none';
	connect-src *;
	font-src 'self';
`

const securityHeaders = [
	{
		key: 'Content-Security-Policy',
		value: contentSecurityPolicy.replace(/\n/g, ''),
	},
	{
		key: 'Referrer-Policy',
		value: 'strict-origin',
	},
	{
		key: 'X-Frame-Options',
		value: 'DENY',
	},
	{
		key: 'X-Content-Type-Options',
		value: 'nosniff',
	},
	{
		key: 'X-DNS-Prefetch-Control',
		value: 'on',
	},
	{
		key: 'Strict-Transport-Security',
		value: 'max-age=31536000; includeSubDomains; preload',
	},
	{
		key: 'Permissions-Policy',
		value: 'camera=(), microphone=(), geolocation=()',
	},
]

const nextConfig = {
	// eslint-disable-next-line require-await
	async headers() {
		return [
			{
				source: '/',
				headers: securityHeaders,
			},
			{
				source: '/:path*',
				headers: securityHeaders,
			},
		]
	},
}

module.exports = withVanillaExtract(nextConfig)
