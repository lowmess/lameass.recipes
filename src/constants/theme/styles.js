export default {
	root: {
		fontSize: 'base',
		fontFamily: 'system-ui',
		lineHeight: 'copy',
		textRendering: 'optimizeLegibility',
		// Not picked up by autoprefixer for some reason?
		WebkitFontSmoothing: 'antialiased',
	},

	a: {
		color: 'text',
		textDecoration: 'underline',
		textDecorationColor: (theme) => theme.colors.accent,

		'&:hover': {
			color: 'accent',
		},
	},
}
