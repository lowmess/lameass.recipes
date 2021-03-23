import { Theme, ColorOrNestedColorScale } from '@theme-ui/css'
import { NestedThemeUICSSObject } from './'

const styles: NestedThemeUICSSObject = {
	root: {
		fontSize: 1,
		fontFamily: 'system-ui',
		lineHeight: 'copy',
		textRendering: 'optimizeLegibility',
		// Not picked up by autoprefixer for some reason?
		WebkitFontSmoothing: 'antialiased',
	},

	a: {
		color: 'text',
		textDecoration: 'underline',
		textDecorationColor: (theme: Theme): ColorOrNestedColorScale =>
			theme.colors.accent,

		'&:hover': {
			color: 'accent',
		},
	},
}

export default styles
