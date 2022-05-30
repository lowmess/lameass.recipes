import * as React from 'react'
import classnames from 'classnames'
import { Box, BoxProps } from '../Box'
import * as styles from './Container.css'

export const Container: React.FC<BoxProps> = ({ className, ...props }) => {
	const containerClasses = classnames(styles.container, className)

	return <Box className={containerClasses} {...props} />
}
