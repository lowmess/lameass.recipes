import * as React from 'react'
import { Box, BoxProps } from '../Box'

export const Text: React.FC<BoxProps> = (props) => (
	<Box component="span" {...props} />
)
