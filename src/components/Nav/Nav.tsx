import * as React from 'react'
import classnames from 'classnames'
import { Container } from '../Container'
import { Text } from '../Text'
import { Link } from '../Link'
import * as linkStyles from '../../styles/links.css'
import * as styles from './Nav.css'

export const Nav: React.FC = () => (
	<nav className={styles.nav}>
		<a href="#main-content" className={styles.skipNavLink}>
			Skip to main content
		</a>

		<Container textAlign="center">
			<Link href="/" className={classnames(styles.logo, linkStyles.ui)}>
				lameass
				<Text color={['white', 'gray-1']}>.</Text>
				recipes
			</Link>

			<ul className={styles.list}>
				<li>
					<Link href="/recipes" className={linkStyles.ghost}>
						Recipes
					</Link>
				</li>

				<li>
					<Link href="/meals" className={linkStyles.ghost}>
						Meals
					</Link>
				</li>

				<li>
					<Link href="/categories" className={linkStyles.ghost}>
						Categories
					</Link>
				</li>
			</ul>
		</Container>
	</nav>
)
