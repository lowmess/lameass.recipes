import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles'
import { calc } from '@vanilla-extract/css-utils'
import { vars } from './_global.css'

const { space, color, fontSize, fontFamily } = vars

const negativeSpace = {
	'-xxl': calc.negate(vars.space.xxl),
	'-xl': calc.negate(vars.space.xl),
	'-lg': calc.negate(vars.space.lg),
	'-md': calc.negate(vars.space.md),
	'-sm': calc.negate(vars.space.sm),
	'-xs': calc.negate(vars.space.xs),
}

const margins = {
	...negativeSpace,
	...space,
	auto: 'auto',
}

const colors = {
	...color,
	inherit: 'inherit',
	transparent: 'transparent',
	theme: `var(--theme, ${color.accent})`,
}

const responsiveProperties = defineProperties({
	conditions: {
		sm: {},
		md: { '@media': 'screen and (min-width: 48em)' },
		lg: { '@media': 'screen and (min-width: 64em)' },
	},
	defaultCondition: 'sm',
	responsiveArray: ['sm', 'md', 'lg'],
	properties: {
		display: ['none', 'block', 'flex', 'inline', 'inline-block', 'inline-flex'],
		flexDirection: ['row', 'column'],
		flexWrap: ['wrap', 'nowrap'],
		justifyContent: [
			'stretch',
			'flex-start',
			'center',
			'flex-end',
			'space-around',
			'space-between',
		],
		alignItems: ['stretch', 'flex-start', 'center', 'flex-end', 'baseline'],
		marginBlockStart: margins,
		marginBlockEnd: margins,
		marginInlineStart: margins,
		marginInlineEnd: margins,
		paddingBlockStart: space,
		paddingBlockEnd: space,
		paddingInlineStart: space,
		paddingInlineEnd: space,
		rowGap: space,
		columnGap: space,
		fontSize,
		textAlign: ['left', 'center', 'right', 'start', 'end'],
	},
	shorthands: {
		margin: [
			'marginBlockStart',
			'marginBlockEnd',
			'marginInlineStart',
			'marginInlineEnd',
		],
		marginBlock: ['marginBlockStart', 'marginBlockEnd'],
		marginInline: ['marginInlineStart', 'marginInlineEnd'],
		padding: [
			'paddingBlockStart',
			'paddingBlockEnd',
			'paddingInlineStart',
			'paddingInlineEnd',
		],
		paddingBlock: ['paddingBlockStart', 'paddingBlockEnd'],
		paddingInline: ['paddingInlineStart', 'paddingInlineEnd'],
		gap: ['rowGap', 'columnGap'],
	},
})

const unresponsiveProperties = defineProperties({
	properties: {
		fontWeight: {
			light: 300,
			regular: 400,
			medium: 500,
			semibold: 600,
			bold: 700,
		},
		textDecoration: ['none', 'underline'],
		fontFamily,
	},
})

const colorProperties = defineProperties({
	conditions: {
		light: {},
		dark: { '@media': '(prefers-color-scheme: dark)' },
		hover: { selector: '&:hover' },
		darkHover: {
			'@media': '(prefers-color-scheme: dark)',
			selector: '&:hover',
		},
	},
	defaultCondition: 'light',
	responsiveArray: ['light', 'dark'],
	properties: {
		background: colors,
		backgroundColor: colors,
		color: colors,
		borderColor: colors,
	},
})

export const sprinkles = createSprinkles(
	responsiveProperties,
	unresponsiveProperties,
	colorProperties
)

export type Sprinkles = Parameters<typeof sprinkles>[0]
