import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/_global.css'

export const container = style({
	maxWidth: vars.container,
	marginInline: 'auto',
	paddingInline: vars.space.lg,
})
