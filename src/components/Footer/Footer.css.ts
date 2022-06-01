import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/_global.css'
import { sprinkles } from '../../styles/_sprinkles.css'

export const grid = style([
	sprinkles({
		columnGap: ['md', 'lg', null, 'xl'],
		rowGap: 'lg',
	}),
	{
		display: 'grid',
		gridTemplateColumns: '1fr',

		'@media': {
			'screen and (min-width: 26em)': {
				gridTemplateColumns: '1fr 3fr',
			},

			'screen and (min-width: 32em)': {
				gridTemplateColumns: '1fr 2fr',
			},

			'screen and (min-width: 50em)': {
				gridTemplateColumns: '1fr 2fr max-content',
			},

			'screen and (min-width: 64em)': {
				gridTemplateColumns: '2fr 3fr max-content',
			},
		},
	},
])

export const sectionHeading = style([
	sprinkles({
		marginTop: 'none',
		marginBottom: 'sm',
		borderColor: 'gray-1',
		paddingX: 'sm',
		fontSize: 'lg',
		fontWeight: 'medium',
	}),
	{
		borderBottomWidth: '4px',
		borderBottomStyle: 'solid',
		lineHeight: 1.25,
	},
])

export const list = style([
	sprinkles({
		marginY: 'none',
		paddingX: 'sm',
	}),
	{
		textTransform: 'lowercase',
		listStyleType: 'none',
		columnGap: vars.space.md,

		'@media': {
			'(min-width: 32em)': {
				columnCount: 2,
			},
		},
	},
])

export const tagline = style([
	sprinkles({
		marginY: 'none',
		fontSize: 'xxl',
		fontWeight: 'semibold',
	}),
	{
		justifySelf: 'center',
		lineHeight: 1,

		'@media': {
			'screen and (min-width: 26em)': {
				gridColumn: '1/3',
			},

			'(min-width: 50em)': {
				gridColumn: 'auto',
			},
		},
	},
])
