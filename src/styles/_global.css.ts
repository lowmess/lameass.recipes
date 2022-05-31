import { globalStyle, createGlobalTheme } from '@vanilla-extract/css'

const palette = {
	white: '#ffffff',
	black: '#131310',
	accent: '#fc4b39',

	'gray-0': '#eeeee9',
	'gray-1': '#e1e1db',
	'gray-2': '#d3d3ce',
	'gray-3': '#c4c4bf',
	'gray-4': '#b3b3af',
	'gray-5': '#a0a09c',
	'gray-6': '#898986',
	'gray-7': '#6c6c69',
	'gray-8': '#3f3f3e',
	'gray-9': '#2e2e2d',

	'beige-0': '#eff0d0',
	'beige-1': '#e2e3c5',
	'beige-2': '#d4d5b9',
	'beige-3': '#c5c6ac',
	'beige-4': '#b4b59d',
	'beige-5': '#a1a18c',
	'beige-6': '#8a8a78',
	'beige-7': '#6d6d5f',
	'beige-8': '#404037',
	'beige-9': '#2c2c25',

	gray: '#b09b99',
	red: '#fc4b39',
	pink: '#fd6faa',
	fuschia: '#fd88f4',
	indigo: '#9c93fd',
	violet: '#c980fd',
	blue: '#60a1fd',
	cyan: '#2fc5d2',
	teal: '#2ecb8a',
	green: '#2ab835',
	lime: '#6ec82d',
	yellow: '#dceb35',
	orange: '#f0a336',
}

const fontSize = {
	sm: 'clamp(0.75rem, 0.39vw + 0.63rem, 0.88rem)',
	md: 'clamp(1rem, 0.74vw + 0.78rem, 1.25rem)',
	lg: 'clamp(1.33rem, 1.28vw + 0.95rem, 1.77rem)',
	xl: 'clamp(1.78rem, 2.12vw + 1.14rem, 2.5rem)',
	xxl: 'clamp(2.37rem, 3.43vw + 1.34rem, 3.53rem)',
	xxxl: 'clamp(3.16rem, 5.41vw + 1.53rem, 5rem)',
}

globalStyle('html', {
	backgroundColor: palette['beige-0'],
	color: palette['gray-9'],

	'@media': {
		'(prefers-color-scheme: dark)': {
			backgroundColor: palette['beige-9'],
			color: palette['gray-1'],
		},

		'(min-width: 90em)': {
			fontSize: '112.5%',
		},
	},
})

globalStyle('body', {
	fontSize: fontSize.md,
})

globalStyle('a', {
	color: 'inherit',
	textDecorationColor: palette.accent,
})

globalStyle('a:hover', {
	color: palette.accent,
})

globalStyle('h1, h2, h3, h4, h5, h6', {
	fontFamily: `Henrietta, Georgia, serif`,
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
	color: palette,
	fontSize,
	container: '64rem',
})
