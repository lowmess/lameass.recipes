import * as React from 'react'
import { Container } from '../Container'
import { Text } from '../Text'
import { Link } from '../Link'
import * as styles from './Nav.css'

export const Nav: React.FC = () => (
	<nav className={styles.nav}>
		<a href="#main-content" className={styles.skipNavLink}>
			Skip to main content
		</a>

		<Container textAlign="center">
			<Link href="/" className={styles.logo}>
				lameass
				<Text color={['white', 'gray-1']}>.</Text>
				recipes
			</Link>

			<ul className={styles.list}>
				<li>
					<Link href="/recipes">Recipes</Link>
				</li>

				<li>
					<Link href="/meals">Meals</Link>
				</li>

				<li>
					<Link href="/categories">Categories</Link>
				</li>
			</ul>
		</Container>
	</nav>
)
