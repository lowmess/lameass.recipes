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

export const logo = sprinkles({
	display: 'block',
	marginBlockEnd: 'sm',
	fontSize: ['xl', 'xxl'],
	fontWeight: 'semibold',
	fontFamily: 'henrietta',
	color: {
		light: 'accent',
		hover: 'inherit',
	},
	textDecoration: 'none',
})

export const list = style({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	gap: vars.space.md,
	width: '100vw',
	marginLeft: 'calc(50% - 50vw)',
	marginBlock: 0,
	paddingBlockStart: vars.space.xs,
	paddingBlockEnd: vars.space.sm,
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
	marginInlineEnd: vars.space.md,
	color: vars.color.accent,

	'@media': {
		'(min-width: 64em)': {
			marginInlineEnd: vars.space.lg,
		},
	},
})
