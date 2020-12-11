export const paragraphs = {
	p: {
		maxWidth: 'measure',
		margin: 0,
	},

	'p + p': {
		marginTop: 3,
	},
}

export const links = {
	a: {
		color: 'text',
		textDecorationColor: (theme) => theme.colors.accent,

		'&:hover': {
			color: 'accent',
		},
	},
}
