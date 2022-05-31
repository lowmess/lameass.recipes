import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../styles/_global.css'
import { sprinkles } from '../../styles/_sprinkles.css'

export const nav = style({
	position: 'relative',
})

export const skipNavLink = style({
	position: 'absolute',
	opacity: 0,
	pointerEvents: 'none',

	':focus': {
		opacity: 1,
		pointerEvents: 'auto',
	},
})

export const logo = style([
	sprinkles({
		marginY: ['sm', 'xs', 'none'],
		fontSize: ['xl', null, 'xxl'],
		fontWeight: 'semibold',
		color: {
			light: 'accent',
			hover: 'inherit',
		},
		textDecoration: 'none',
	}),
	{
		fontFamily: 'Henrietta, georgia, serif',
	},
])

globalStyle(`${logo} a`, {
	color: vars.color.accent,
	textDecoration: 'none',
})

globalStyle(`${logo} a:hover`, {
	color: 'inherit',
})

export const list = style({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	gap: vars.space.md,
	width: '100vw',
	marginLeft: 'calc(50% - 50vw)',
	marginBlock: 0,
	paddingTop: vars.space.xs,
	paddingBottom: vars.space.sm,
	paddingInline: vars.space.lg,
	borderBlock: `2px solid ${vars.color.accent}`,
	textTransform: 'lowercase',
	whiteSpace: 'nowrap',
	overflowX: 'auto',

	'@media': {
		'(min-width: 64em)': {
			gap: vars.space.lg,
		},
	},
})

globalStyle(`${list} li + li::before`, {
	content: '\u2022',
	paddingInlineEnd: vars.space.md,
	color: vars.color.accent,

	'@media': {
		'(min-width: 64em)': {
			paddingInlineEnd: vars.space.lg,
		},
	},
})

globalStyle(`${list} a`, {
	textDecoration: 'none',
})
