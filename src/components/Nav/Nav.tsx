import * as React from 'react'
import Link from 'next/link'
import { Box, Flex, Grid, Text, Container, NavLink } from 'theme-ui'
import { Notebook, Tag } from 'phosphor-react'
import SkipNavLink from './SkipNavLink'
import Logo from './Logo'
import ColorModeToggle from './ColorModeToggle'

const Nav: React.FC = () => (
  <Box as="nav" sx={{ paddingY: 1, backgroundColor: 'primary' }}>
    <Grid
      as={Container}
      columns={['1fr 1fr min-content', null, 3]}
      gap={3}
      sx={{
        alignItems: 'center',
        position: 'relative',
        marginX: 'auto', // have to override
        paddingY: 1,
      }}
    >
      <SkipNavLink />

      <Box sx={{ order: [1, null, 2], textAlign: ['left', null, 'center'] }}>
        <Logo />
      </Box>

      <Flex
        as="ul"
        sx={{
          order: [2, null, 1],
          justifyContent: ['flex-end', null, 'flex-start'],
          marginRight: [3, 0],
          paddingLeft: 0,
          listStyleType: 'none',
        }}
      >
        <Box as="li" mr={4}>
          <Link href="/recipes" passHref>
            <NavLink>
              <Notebook />{' '}
              <Text as="span" sx={{ display: ['none', 'inline'] }}>
                Recipes
              </Text>
            </NavLink>
          </Link>
        </Box>

        <Box as="li">
          <Link href="/categories" passHref>
            <NavLink>
              <Tag />{' '}
              <Text as="span" sx={{ display: ['none', 'inline'] }}>
                Categories
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
