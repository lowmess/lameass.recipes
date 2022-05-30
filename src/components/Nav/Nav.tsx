import * as React from 'react'
import Link from 'next/link'
import { Container } from '../Container'
import { Text } from '../Text'
import * as styles from './Nav.css'

export const Nav: React.FC = () => (
	<nav className={styles.nav}>
		<a href="#main-content" className={styles.skipNavLink}>
			Skip to main content
		</a>

		<Container>
			<h1 className={styles.logo}>
				<Link href="/" passHref>
					{/*
					 * i have to apply the styles directly to this link for some reason
					 * (a global style wasn't working), but eslint isn't aware that next
					 * is passing the href to the anchor element.
					 */}
					{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
					<a className={styles.homeLink} title="Home">
						lameass
						<Text color={['white', 'gray-1']}>.</Text>
						recipes
					</a>
				</Link>
			</h1>

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
