const tag = {
	display: 'inline-block',
	borderRadius: 2,
	paddingY: 1,
	paddingX: 2,
	backgroundColor: 'muted',
	fontSize: 0,
	color: 'muted-text',
	textDecoration: 'none',
	transition: '0.2s ease color',

	'&:hover': {
		color: 'text',
	},

	'@media print': {
		border: 0,
		padding: 0,
		fontSize: 'inherit',
	},
}

export default {
	nav: {
		display: 'inline-flex',
		alignItems: 'center',
		position: 'relative',
		top: (theme) => `calc(${theme.space[1]} * 0.5)`,
		fontWeight: 'semi-bold',
		color: 'text',
		transition: '0.2s ease opacity',

		'&:hover, &:focus': {
			color: 'text',
			opacity: 0.75,
		},

		svg: {
			marginRight: [0, 2],
			fontSize: 3,
		},
	},

	logo: {
		color: 'text',
		textDecoration: 'none',

		'&:hover': {
			color: 'text',
		},
	},

	ui: {
		color: 'text',
		textDecoration: 'none',
		transition: '0.2s ease color',

		'&:hover': {
			color: 'accent',
		},
	},

	'view-all': {
		display: 'inline-flex',
		alignItems: 'center',
		fontSize: 0,
		fontWeight: 'bold',
		textTransform: 'uppercase',
		color: 'accent',
		textDecoration: 'none',

		svg: {
			marginLeft: 2,
			transition: '0.2s ease transform',
		},

		'&:hover': {
			color: 'accent',

			svg: {
				transform: 'translateX(0.5rem)',

				'@media (prefers-reduced-motion: reduce), (any-hover: none)': {
					transform: 'none',
				},
			},
		},
	},

	category: {
		fontSize: 0,
		fontWeight: 'bold',
		textTransform: 'uppercase',
		color: 'accent',
		textDecoration: 'none',
		transition: '0.2s ease color',

		'&:hover': {
			color: 'accent',
		},
	},

	tag,

	'tag-info': {
		...tag,

		border: 1,
		borderColor: 'muted-text',
		color: 'text',

		'&:hover': {
			borderColor: 'accent',
			color: 'accent',
		},
	},
}
