const input = {
	border: 0,
	borderRadius: 2,
	backgroundColor: 'muted',
	appearance: 'none',

	'&::placeholder': {
		color: 'muted-text',
	},
}

export default {
	label: {
		fontSize: 1,
		fontFamily: 'system-ui',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		color: 'secondary',
	},

	hint: {
		fontSize: 0,
	},

	input,

	'invisible-input': {
		...input,
		backgroundColor: 'transparent',
	},
}
