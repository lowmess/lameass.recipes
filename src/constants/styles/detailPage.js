import { links, paragraphs } from './nested'

export {
	stripedList,
	stripedListItem,
	getStripedListItemStyles,
} from './stripedList'

export const swash = {
	marginY: [5, null, 6],

	'.swash': {
		position: 'absolute',
		top: [-4, null, '-6rem'],
		left: [-5, null, -6],
		width: [256, null, 512],
		height: [90, null, 180],
		userSelect: 'none',

		'@media print': {
			display: 'none',
		},
	},
}

export const sidebar = {
	top: 3,
	width: (theme) => [
		`calc(100% + ${theme.space[3]} * 2)`,
		`calc(100% + ${theme.space[4]} * 2)`,
		null,
		'auto',
	],
	marginX: [-3, -4, null, 0],
	borderRadius: [null, null, null, 3],
	paddingY: 3,
	paddingX: [3, 4],
	backgroundColor: 'muted',
}

export const info = {
	alignItems: 'baseline',

	svg: {
		flexShrink: 0,
		position: 'relative',
		top: '2px',
	},
}

export const sectionListItem = {
	maxWidth: 'measure',
	paddingY: 2,

	...links,

	'@media print': {
		padding: 0,
	},
}

export const notes = {
	...paragraphs,

	...links,

	'ul, ol': {
		paddingLeft: '1.25em',
	},

	li: {
		maxWidth: 'measure',
		paddingY: 2,
	},
}

export const printHidden = {
	'@media print': {
		display: 'none',
	},
}
