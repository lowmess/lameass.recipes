import { style, createVar, globalStyle } from '@vanilla-extract/css'
import { card } from '../RecipeCard/RecipeCard.css'

const offset = createVar()

export const stack = style({
	display: 'grid',
	maxWidth: '48rem',
	marginInline: 'auto',
	marginBlock: offset,

	vars: {
		[offset]: '2rem',
	},
})

globalStyle(`${stack} ${card}`, {
	gridRow: 'calc(var(--count) * 3 + 1) / span 4',
	gridColumn: 1,
	transform: 'translateX(var(--displacement)) rotateZ(var(--rotation))',

	'@media': {
		'(any-hover: hover)': {
			transition: 'transform 0.3s ease',
		},
	},
})

globalStyle(`${stack} ${card}:hover`, {
	'@media': {
		'(any-hover: hover)': {
			transform: `translateY(calc(${offset} * -1))`,
		},
	},
})

globalStyle(`${stack} ${card}:hover ~ ${card}`, {
	'@media': {
		'(any-hover: hover)': {
			transform: `translateY(calc(${offset} * 0.5)) translateX(var(--displacement)) rotateZ(var(--rotation))`,
		},
	},
})
