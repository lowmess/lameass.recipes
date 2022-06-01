import { style } from '@vanilla-extract/css'
import { vars } from './_global.css'
import { sprinkles } from './_sprinkles.css'

export const text = style([
	sprinkles({
		display: 'inline',
		fontFamily: 'henrietta',
		fontSize: ['xxl', 'xxxl'],
		fontWeight: 'regular',
	}),
	{
		lineHeight: 1.125,

		selectors: {
			'&:not(:last-child)': {
				marginInlineEnd: vars.space.sm,
			},
		},
	},
])
