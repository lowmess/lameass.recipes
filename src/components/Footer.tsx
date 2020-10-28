import * as React from 'react'
import { default as NextLink } from 'next/link'
import { Box, Flex, Container, Link } from 'theme-ui'
import { ThemeUIProps } from '../types/ThemeUIComponent'

const Footer: React.FC<ThemeUIProps> = ({ sx, ...props }) => (
  <Box sx={{ paddingY: 5, backgroundColor: 'muted', ...sx }} {...props}>
    <Container>
      <Flex
        as="ul"
        sx={{
          alignItems: 'ceter',
          justifyContent: 'center',
          paddingLeft: 0,
          listStyleType: 'none',
        }}
      >
        <Box as="li" mr={4}>
          <NextLink href="/" passHref>
            <Link variant="ui">Home</Link>
          </NextLink>
        </Box>

        <Box as="li" mr={4}>
          <NextLink href="/recipes" passHref>
            <Link variant="ui">Recipes</Link>
          </NextLink>
        </Box>

        <Box as="li" mr={4}>
          <NextLink href="/categories" passHref>
            <Link variant="ui">Categories</Link>
          </NextLink>
        </Box>
      </Flex>
    </Container>
  </Box>
)

export default Footer
