import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../styles/_global.css'
import { sprinkles } from '../../styles/_sprinkles.css'

export const card = style([
	sprinkles({
		borderColor: ['gray-9', 'black'],
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

globalStyle(`${card} :not(h1, h2, h3) a:hover`, {
	color: 'var(--theme)',
})

export const titleLink = style({
	textDecoration: 'none',

	':hover': {
		color: 'inherit',
	},
})

export const infoRibbon = style([
	sprinkles({
		paddingBlockEnd: 'sm',
		gap: 'sm',
	}),
	{
		width: '100%',
		borderBlockEndWidth: '2px',
		borderBlockEndStyle: 'solid',
	},
])

globalStyle(`${infoRibbon} > * + *::before`, {
	content: '\u2022',
	color: 'var(--theme)',
	paddingInlineEnd: vars.space.sm,
})

export const description = style({})

globalStyle(`${description} p`, {
	maxWidth: '55ch',
	margin: 0,
})
