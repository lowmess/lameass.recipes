import * as React from 'react'
import classnames from 'classnames'
import { sprinkles, Sprinkles } from '../../styles/_sprinkles.css'
import * as styles from './Box.css'

export interface BoxProps
	extends Omit<
			React.AllHTMLAttributes<HTMLElement>,
			'content' | 'height' | 'translate' | 'color' | 'width' | 'cursor'
		>,
		Sprinkles {
	component?: React.ElementType
}

export const Box: React.FC<BoxProps> = ({
	component = 'div',
	className,
	display,
	flexDirection,
	flexWrap,
	justifyContent,
	alignItems,
	gap,
	rowGap,
	columnGap,
	margin,
	marginX,
	marginY,
	marginTop,
	marginRight,
	marginBottom,
	marginLeft,
	borderColor,
	padding,
	paddingX,
	paddingY,
	paddingTop,
	paddingRight,
	paddingBottom,
	paddingLeft,
	fontSize,
	backgroundColor,
	color,
	...props
}) => {
	const boxClasses = classnames(
		styles.reset,
		sprinkles({
			display,
			flexDirection,
			flexWrap,
			justifyContent,
			alignItems,
			gap,
			rowGap,
			columnGap,
			margin,
			marginX,
			marginY,
			marginTop,
			marginRight,
			marginBottom,
			marginLeft,
			borderColor,
			padding,
			paddingX,
			paddingY,
			paddingTop,
			paddingRight,
			paddingBottom,
			paddingLeft,
			fontSize,
			backgroundColor,
			color,
		}),
		className
	)

	return React.createElement(component, { className: boxClasses, ...props })
}