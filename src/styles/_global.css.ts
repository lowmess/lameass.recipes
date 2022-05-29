import { globalStyle, createGlobalTheme } from '@vanilla-extract/css'

globalStyle('html', {
	backgroundColor: 'beige',
})

globalStyle('h1, h2, h3, h4, h5, h6', {
	fontFamily: `Henrietta`,
})

export const vars = createGlobalTheme(':root', {
	space: {
		none: '0',
		xs: '0.25rem',
		sm: '0.5rem',
		md: '1rem',
		lg: '2rem',
		xl: '4rem',
		xxl: '8rem',
	},
	colors: {
		red: 'tomato',
	},
})
