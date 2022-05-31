import * as React from 'react'
import Link from 'next/link'
import { Box } from '../Box'
import { Container } from '../Container'
import { Text } from '../Text'
import * as styles from './Footer.css'

export const Footer: React.FC = () => (
	<Box component="footer" backgroundColor="accent" color="gray-9" paddingY="xl">
		<Container className={styles.grid}>
			<div>
				<h2 className={styles.sectionHeading}>Site</h2>

				<ul className={styles.list}>
					<li>
						<Link href="/">Home</Link>
					</li>

					<li>
						<Link href="/recipes">Recipes</Link>
					</li>

					<li>
						<Link href="/meals">Meals</Link>
					</li>

					<li>
						<Link href="/categories">Categories</Link>
					</li>

					<li>
						<Link href="/tags">Tags</Link>
					</li>
				</ul>
			</div>

			<div>
				<h2 className={styles.sectionHeading}>About</h2>

				<Text component="p" paddingX="sm" className={styles.graf}>
					lameass.recipes is a digital cookbook written by{' '}
					<a href="https://instagram.com/kayla_lameass">Kayla&nbsp;Lomas</a> and
					designed by <a href="https://lowmess.com">Alec&nbsp;Lomas.</a>
				</Text>
			</div>

			<h2 className={styles.tagline}>
				Cooking:
				<br />
				&ldquo;It&apos;s <Text color="gray-1">Fun</Text>!&rdquo;&trade;
			</h2>
		</Container>
	</Box>
)
