import * as React from 'react'
import { Box, BoxProps } from '../Box'

interface HeadingProps extends BoxProps {
	component: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const Heading: React.FC<HeadingProps> = ({
	component = 'h2',
	...props
}) => <Box component={component} {...props} />
