import { style } from '@vanilla-extract/css'
import { vars } from './_global.css'

export const ui = style({
	color: `var(--theme, ${vars.color.accent})`,
	textDecoration: 'none',

	':hover': {
		color: 'inherit',
	},
})

export const ghost = style({
	color: 'inherit',
	textDecoration: 'none',

	':hover': {
		color: `var(--theme, ${vars.color.accent})`,
	},
})

export const themed = style({
	color: 'inherit',
	textDecorationColor: `var(--theme, ${vars.color.accent})`,

	':hover': {
		color: `var(--theme, ${vars.color.accent})`,
	},
})
