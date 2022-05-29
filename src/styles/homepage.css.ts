import { style } from '@vanilla-extract/css'
import { sprinkles } from './_sprinkles.css'

export const headline = style([
	sprinkles({ marginY: ['xs', null, 'lg'], color: 'red' }),
	{
		fontSize: '4rem',
	},
])
