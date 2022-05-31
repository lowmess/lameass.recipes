import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../styles/_global.css'
import { sprinkles } from '../../styles/_sprinkles.css'

export const card = style([
	sprinkles({
		borderColor: ['gray-9', 'beige-6'],
		padding: 'md',
		backgroundColor: ['white', 'beige-8'],
	}),
	{
		borderStyle: 'solid',
		borderWidth: '0.25rem',
		boxShadow: '0 -8px 16px -4px rgba( 0, 0, 0, 0.25 )',
		transform: 'translateX(var(--x-offset)) rotateZ(var(--rotate))',
	},
])

export const titleLink = style({
	textDecoration: 'none',

	':hover': {
		color: 'inherit',
	},
})

export const infoRibbon = style([
	sprinkles({
		marginX: '-md',
		paddingBottom: 'sm',
		gap: 'md',
	}),
	{
		width: '100%',
		borderBottomWidth: '2px',
		borderBottomStyle: 'solid',
	},
])

globalStyle(`${infoRibbon} > * + *::before`, {
	content: '\u2022',
	color: 'var(--category-color)',
	paddingInlineEnd: vars.space.md,
})
