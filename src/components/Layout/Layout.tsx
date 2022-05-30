import * as React from 'react'
import { Box } from '../Box'
import { Flex } from '../Flex'
import { Nav } from '../Nav'
import { Footer } from '../Footer'
import * as styles from './Layout.css'

interface LayoutProps {
	children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => (
	<Flex className={styles.container} flexDirection="column">
		<Nav />

		<Box id="main-content" className={styles.mainContent}>
			{children}
		</Box>

		<Footer />
	</Flex>
)
