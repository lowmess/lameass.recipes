import * as React from 'react'
import { Box, BoxProps } from '../Box'

type Direction = 'vertical' | 'horizontal'

interface StackProps extends BoxProps {
	direction?: Direction | Array<Direction>
}

export const Stack: React.FC<StackProps> = ({
	direction = 'vertical',
	gap = 'none',
	...props
}) => {
	const directionToFlow = (flexDirection: Direction) =>
		flexDirection === 'vertical' ? 'column' : 'row'

	const flexDirection = Array.isArray(direction)
		? direction.map(directionToFlow)
		: directionToFlow(direction)

	return (
		<Box
			display="flex"
			flexWrap="wrap"
			// TS recognizes that this can only be "column", "row", or an array of
			// those strings, but doesn't like the assignment anyways. but it works so
			flexDirection={flexDirection as BoxProps['flexDirection']}
			gap={gap}
			{...props}
		/>
	)
}

export const VStack: React.FC<Omit<StackProps, 'direction'>> = (props) => (
	<Stack {...props} direction="vertical" />
)

export const HStack: React.FC<Omit<StackProps, 'direction'>> = (props) => (
	<Stack {...props} direction="horizontal" />
)
