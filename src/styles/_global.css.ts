import { globalStyle, createGlobalTheme } from '@vanilla-extract/css'

const palette = {
	white: '#ffffff',

	'gray-0': '#f9f9f8',
	'gray-1': '#eeeee9',
	'gray-2': '#e1e1db',
	'gray-3': '#d3d3ce',
	'gray-4': '#c4c4bf',
	'gray-5': '#b3b3af',
	'gray-6': '#a0a09c',
	'gray-7': '#898986',
	'gray-8': '#6c6c69',
	'gray-9': '#3f3f3e',

	'yellow-0': '#fafaed',
	'yellow-1': '#eff0d0',
	'yellow-2': '#e2e3c5',
	'yellow-3': '#d4d5b9',
	'yellow-4': '#c5c6ac',
	'yellow-5': '#b4b59d',
	'yellow-6': '#a1a18c',
	'yellow-7': '#8a8a78',
	'yellow-8': '#6d6d5f',
	'yellow-9': '#404037',

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
	backgroundColor: palette['yellow-1'],
	color: palette['gray-9'],
	fontSize: fontSize.md,

	'@media': {
		'(prefers-color-scheme: dark)': {
			backgroundColor: palette['yellow-9'],
			color: palette['gray-1'],
		},
	},
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
	color: palette,
	fontSize,
})
