import * as React from 'react'
import Link from 'next/link'
import { Box, Flex, Container, Grid, NavLink } from 'theme-ui'
import { Notebook, Tag } from 'phosphor-react'
import Logo from './Logo'
import ColorModeToggle from './ColorModeToggle'

const Nav: React.FC = () => (
  <Box as="nav" sx={{ paddingY: 1, backgroundColor: 'primary' }}>
    <Grid
      as={Container}
      columns={3}
      gap={3}
      sx={{
        alignItems: 'center',
        marginX: 'auto', // have to override
        paddingY: 1,
      }}
    >
      <Box sx={{ order: 2, textAlign: 'center' }}>
        <Logo />
      </Box>

      <Flex as="ul" sx={{ order: 1, paddingLeft: 0, listStyleType: 'none' }}>
        <Box as="li" mr={4}>
          <Link href="/recipes" passHref>
            <NavLink>
              <Notebook /> Recipes
            </NavLink>
          </Link>
        </Box>

        <Box as="li">
          <Link href="/categories" passHref>
            <NavLink>
              <Tag /> Categories
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
