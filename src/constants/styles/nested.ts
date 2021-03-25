/* eslint-disable import/exports-last */
import { ThemeUICSSObject } from 'theme-ui'

export const paragraphs: ThemeUICSSObject = {
	p: {
		maxWidth: 'measure',
		margin: 0,
	},

	'p + p': {
		marginTop: 3,
	},
}

const a: ThemeUICSSObject = {
	color: 'text',
	textDecorationColor: (theme) => theme.colors.accent,

	'&:hover': {
		color: 'accent',
	},
}

export const links: ThemeUICSSObject = {
	a,
}
