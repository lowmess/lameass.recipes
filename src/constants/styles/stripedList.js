import { links } from './nested'

export const stripedList = {
	paddingLeft: 0,
	listStyleType: 'none',

	...links,

	'@media print': {
		paddingLeft: 4,
		listStyleType: 'disc',
	},
}

export const stripedListItem = {
	width: (theme) => [
		`calc(100% + ${theme.space[2]} * 2)`,
		`calc(100% + ${theme.space[3]} * 2)`,
	],
	marginX: [-2, -3],
	paddingY: 2,
	paddingX: [2, 3],
	borderRadius: 2,

	'@media print': {
		padding: 0,
	},
}

export const getStripedListItemStyles = (stripeColor) => ({
	...stripedListItem,

	'&:nth-of-type(even)': {
		backgroundColor: stripeColor,
	},
})
