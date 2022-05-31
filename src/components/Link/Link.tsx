import * as React from 'react'
import { default as NextLink } from 'next/link'
import { Box, BoxProps } from '../Box'

interface LinkProps extends BoxProps {
	href: string
}

export const Link: React.FC<LinkProps> = ({ href, ...props }) => (
	<NextLink href={href} passHref>
		<Box component="a" {...props} />
	</NextLink>
)
