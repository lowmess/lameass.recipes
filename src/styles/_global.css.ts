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
		accent: '#f94838',

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

		gray: '#998482',
		red: '#f94838',
		pink: '#fa3989',
		violet: '#ba5bfd',
		blue: '#3887f7',
		cyan: '#2497a0',
		teal: '#239b6a',
		green: '#249e2e',
		yellow: '#d7c30f',
		orange: '#d69231',
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

// override colors in dark mode
globalStyle(':root', {
	'@media': {
		'(prefers-color-scheme: dark)': {
			vars: {
				[vars.color.accent]: '#fc4b39',

				[vars.color.gray]: '#c0afae',
				[vars.color.red]: '#fc4b39',
				[vars.color.pink]: '#fd91be',
				[vars.color.violet]: '#d59cfd',
				[vars.color.blue]: '#60a1fd',
				[vars.color.cyan]: '#2fc5d2',
				[vars.color.teal]: '#32de96',
				[vars.color.green]: '#2fce3c',
				[vars.color.yellow]: '#dceb35',
				[vars.color.orange]: '#f0a336',
			},
		},
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
