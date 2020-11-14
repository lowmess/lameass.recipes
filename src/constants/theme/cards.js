export default {
	primary: {
		position: 'relative',
		border: 1,
		borderColor: 'border',
		borderRadius: 2,
		backgroundColor: 'background',
		transition: '0.25s ease transform',

		'&::before': {
			content: '""',
			display: 'block',
			position: 'absolute',
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			width: '100%',
			height: '100%',
			boxShadow: (theme) =>
				`0 2rem 4rem -0.5rem ${theme.colors['card-shadow']}`,
			opacity: 0,
			transition: '0.2s ease opacity',

			'@media (prefers-reduced-motion: reduce), (any-hover: none)': {
				content: 'none',
			},
		},

		'&:hover': {
			transform: (theme) => `translateY(-${theme.space[3]})`,

			'@media (prefers-reduced-motion: reduce), (any-hover: none)': {
				transform: 'none',
			},
		},

		'&:hover::before': {
			opacity: 1,
		},
	},
}
