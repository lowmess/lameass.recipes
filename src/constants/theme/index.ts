/* eslint-disable import/exports-last */
import { Theme, ThemeUICSSObject } from '@theme-ui/css'
// primitives
import colors from './colors'
import space from './space'
import { borders, radii } from './borders'
import { fonts, fontSizes, fontWeights, lineHeights } from './typography'
import sizes from './sizes'
// variants
import styles from './styles'
import layout from './layout'
import cards from './cards'
import text from './text'
import links from './links'
import buttons from './buttons'
import forms from './forms'

export type NestedThemeUICSSObject = {
	[k: string]: ThemeUICSSObject
}

const breakpoints = ['30em', '40em', '64em']

const theme: Theme = {
	// settings
	useColorSchemeMediaQuery: true,
	// primitives
	breakpoints,
	colors,
	space,
	borders,
	radii,
	fonts,
	fontSizes,
	fontWeights,
	lineHeights,
	sizes,
	// variants
	styles,
	layout,
	cards,
	text,
	links,
	buttons,
	forms,
}

export default theme
