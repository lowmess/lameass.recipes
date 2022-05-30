import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles'
import { calc } from '@vanilla-extract/css-utils'
import { vars } from './_global.css'

const { space, color, fontSize } = vars

const spaceKeys = Object.keys(vars.space).filter((key) => key !== 'none')

const negativeSpace = spaceKeys.reduce((spaceObject, key) => {
	spaceObject[`-${key}`] = calc.negate(space[key])

	return spaceObject
}, {})

const margins = {
	...negativeSpace,
	...space,
	auto: 'auto',
}

const colors = {
	...color,
	inherit: 'inherit',
	transparent: 'transparent',
}

const responsiveProperties = defineProperties({
	conditions: {
		xs: {},
		sm: { '@media': 'screen and (min-width: 30em)' },
		md: { '@media': 'screen and (min-width: 48em)' },
		lg: { '@media': 'screen and (min-width: 64em)' },
	},
	defaultCondition: 'xs',
	responsiveArray: ['xs', 'sm', 'md', 'lg'],
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
		marginTop: margins,
		marginRight: margins,
		marginBottom: margins,
		marginLeft: margins,
		paddingTop: space,
		paddingRight: space,
		paddingBottom: space,
		paddingLeft: space,
		rowGap: space,
		columnGap: space,
		fontSize,
		fontWeight: {
			light: 300,
			regular: 400,
			medium: 500,
			semibold: 600,
			bold: 700,
		},
		textAlign: ['left', 'center', 'right', 'start', 'end'],
	},
	shorthands: {
		margin: ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
		marginX: ['marginLeft', 'marginRight'],
		marginY: ['marginTop', 'marginBottom'],
		padding: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
		paddingX: ['paddingLeft', 'paddingRight'],
		paddingY: ['paddingTop', 'paddingBottom'],
		gap: ['rowGap', 'columnGap'],
	},
})

const colorProperties = defineProperties({
	conditions: {
		lightMode: {},
		darkMode: { '@media': '(prefers-color-scheme: dark)' },
		hover: { selector: '&:hover' },
	},
	defaultCondition: 'lightMode',
	responsiveArray: ['lightMode', 'darkMode'],
	properties: {
		background: colors,
		backgroundColor: colors,
		color: colors,
		borderColor: colors,
	},
})

export const sprinkles = createSprinkles(responsiveProperties, colorProperties)

export type Sprinkles = Parameters<typeof sprinkles>[0]
