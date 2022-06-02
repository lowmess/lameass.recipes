import * as React from 'react'
import { Box } from '../Box'
import { Container } from '../Container'
import { Text } from '../Text'
import { Link } from '../Link'
import { vars } from '../../styles/_global.css'
import * as linkStyles from '../../styles/links.css'
import * as styles from './Footer.css'

export const Footer: React.FC = () => (
	<Box
		component="footer"
		backgroundColor="accent"
		color="gray-9"
		paddingBlock="xl"
		style={{ '--theme': vars.color['gray-1'] }}
	>
		<Container className={styles.grid}>
			<div>
				<h2 className={styles.sectionHeading}>Site</h2>

				<ul className={styles.list}>
					<li>
						<Link href="/" className={linkStyles.ghost}>
							Home
						</Link>
					</li>

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

					<li>
						<Link href="/tags" className={linkStyles.ghost}>
							Tags
						</Link>
					</li>
				</ul>
			</div>

			<div>
				<h2 className={styles.sectionHeading}>About</h2>

				<Text component="p" paddingInline="sm">
					lameass.recipes is a digital cookbook written by{' '}
					<a
						href="https://instagram.com/kayla_lameass"
						className={linkStyles.themed}
					>
						Kayla&nbsp;Lomas
					</a>{' '}
					and designed by{' '}
					<a href="https://lowmess.com" className={linkStyles.themed}>
						Alec&nbsp;Lomas.
					</a>
				</Text>
			</div>

			<h2 className={styles.tagline}>
				Cooking:
				<br />
				&ldquo;It&apos;s <Text color="theme">Fun</Text>
				!&rdquo;&trade;
			</h2>
		</Container>
	</Box>
)
