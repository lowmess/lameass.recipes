import { globalStyle, createGlobalTheme } from '@vanilla-extract/css'

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
	color: {
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
	},
	// massive shout-out to https://min-max-calculator.9elements.com/
	fontSize: {
		sm: 'clamp(0.875rem, 0.765rem + 0.37vw, 1rem)',
		md: 'clamp(1rem, 0.779rem + 0.74vw, 1.25rem)',
		lg: 'clamp(1.25rem, 0.809rem + 1.47vw, 1.75rem)',
		xl: 'clamp(2rem, 1.559rem + 1.47vw, 2.5rem)',
		xxl: 'clamp(2.5rem, 1.618rem + 2.94vw, 3.5rem)',
		xxxl: 'clamp(3rem, 1.235rem + 5.88vw, 5rem)',
	},
	container: '64rem',
	fontFamily: {
		system:
			'system-ui, -apple-system, "Segoe UI", "Roboto", "Ubuntu", "Cantarell", "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
		henrietta: 'Henrietta, georgia, serif',
	},
})

globalStyle('html', {
	backgroundColor: vars.color['beige-0'],
	color: vars.color['gray-9'],

	'@media': {
		'(prefers-color-scheme: dark)': {
			backgroundColor: vars.color['beige-9'],
			color: vars.color['gray-1'],
		},

		'(min-width: 90em)': {
			fontSize: '112.5%',
		},
	},
})

globalStyle('body', {
	fontSize: vars.fontSize.md,
})

globalStyle('a', {
	color: 'inherit',
	textDecorationColor: vars.color.accent,
})

globalStyle('a:hover', {
	color: vars.color.accent,
})

globalStyle('h1, h2, h3, h4, h5, h6', {
	fontFamily: vars.fontFamily.henrietta,
	lineHeight: 1.25,
})
