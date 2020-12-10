import * as React from 'react'
import Link from 'next/link'
import { Box, Flex, Text, Container, NavLink } from 'theme-ui'
import { ListNumbers, FolderSimple, ForkKnife } from 'phosphor-react'
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
		<Flex
			as={Container}
			sx={{
				alignItems: 'center',
				justifyContent: 'space-between',
				position: 'relative',
				marginX: 'auto', // have to override
				paddingY: 1,
			}}
		>
			<SkipNavLink />

			<Box sx={{ marginRight: 4 }}>
				<Logo />
			</Box>

			<Flex sx={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
				<Flex
					as="ul"
					sx={{
						justifyContent: 'flex-end',
						marginRight: [3, null, 2, 3],
						paddingLeft: 0,
						listStyleType: 'none',
					}}
				>
					<Box as="li" mr={[3, null, null, 4]}>
						<Link href="/recipes" passHref>
							<NavLink>
								<ListNumbers weight="bold" />{' '}
								<Text as="span" sx={{ display: ['none', null, 'inline'] }}>
									Recipes
								</Text>
							</NavLink>
						</Link>
					</Box>

					<Box
						as="li"
						sx={{
							display: ['none', 'inline-block'],
							marginRight: [3, null, null, 4],
						}}
					>
						<Link href="/meals" passHref>
							<NavLink>
								<ForkKnife weight="bold" />{' '}
								<Text as="span" sx={{ display: ['none', null, 'inline'] }}>
									Meals
								</Text>
							</NavLink>
						</Link>
					</Box>

					<Box as="li">
						<Link href="/categories" passHref>
							<NavLink>
								<FolderSimple weight="bold" />{' '}
								<Text as="span" sx={{ display: ['none', null, 'inline'] }}>
									Categories
								</Text>
							</NavLink>
						</Link>
					</Box>
				</Flex>

				<Box sx={{ order: 3, fontSize: 3, textAlign: 'right' }}>
					<ColorModeToggle />
				</Box>
			</Flex>
		</Flex>
	</Box>
)

export default Nav
