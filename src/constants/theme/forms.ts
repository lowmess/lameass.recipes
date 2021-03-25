import { ThemeUICSSObject } from '@theme-ui/css'
import { NestedThemeUICSSObject } from './'

const input: ThemeUICSSObject = {
	border: 0,
	borderRadius: 2,
	backgroundColor: 'muted',
	appearance: 'none',

	'&::placeholder': {
		color: 'muted-text',
	},
}

const forms: NestedThemeUICSSObject = {
	label: {
		fontSize: 2,
		fontFamily: 'system-ui',
		fontWeight: 'bold',
		color: 'secondary',
	},

	hint: {
		fontSize: 0,
		color: 'muted-text',
	},

	input,

	'invisible-input': {
		...input,
		backgroundColor: 'transparent',
	},
}

export default forms
