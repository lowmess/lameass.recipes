import * as React from 'react'
import Link from 'next/link'
import { Box, Flex, Grid, Text, Container, NavLink } from 'theme-ui'
import { ListNumbers, ForkKnife } from 'phosphor-react'
import SkipNavLink from './SkipNavLink'
import Logo from './Logo'
import ColorModeToggle from './ColorModeToggle'

const Nav: React.FC = () => (
	<Box
		as="nav"
		sx={{
			position: 'relative',
			zIndex: 1000,
			overflow: 'visible',
			paddingY: 1,
			backgroundColor: 'primary',
		}}
	>
		<Grid
			as={Container}
			columns={['1fr 1fr min-content', null, null, 3]}
			gap={3}
			sx={{
				alignItems: 'center',
				position: 'relative',
				marginX: 'auto', // have to override
				paddingY: 1,
			}}
		>
			<SkipNavLink />

			<Box
				sx={{
					order: [1, null, null, 2],
					textAlign: ['left', null, null, 'center'],
				}}
			>
				<Logo />
			</Box>

			<Flex
				as="ul"
				sx={{
					order: [2, null, null, 1],
					justifyContent: ['flex-end', null, null, 'flex-start'],
					marginRight: [0, 3, null, 0],
					paddingLeft: 0,
					listStyleType: 'none',
				}}
			>
				<Box as="li" mr={[3, 4]}>
					<Link href="/recipes" passHref>
						<NavLink>
							<ListNumbers weight="bold" />{' '}
							<Text as="span" sx={{ display: ['none', null, 'inline'] }}>
								Recipes
							</Text>
						</NavLink>
					</Link>
				</Box>

				<Box as="li">
					<Link href="/meals" passHref>
						<NavLink>
							<ForkKnife weight="bold" />{' '}
							<Text as="span" sx={{ display: ['none', null, 'inline'] }}>
								Meals
							</Text>
						</NavLink>
					</Link>
				</Box>
			</Flex>

			<Box sx={{ order: 3, fontSize: 3, textAlign: 'right' }}>
				<ColorModeToggle />
			</Box>
		</Grid>
	</Box>
)

export default Nav
