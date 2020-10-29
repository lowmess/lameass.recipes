import * as React from 'react'
import { default as NextLink } from 'next/link'
import { Box, Flex, Container, Link } from 'theme-ui'
import { ThemeUIProps } from '../types/ThemeUIComponent'

const Footer: React.FC<ThemeUIProps> = ({ sx, ...props }) => (
  <Box sx={{ paddingY: 4, backgroundColor: 'muted', ...sx }} {...props}>
    <Container>
      <Flex
        as="ul"
        sx={{
          flexDirection: ['column', null, 'row'],
          alignItems: 'ceter',
          justifyContent: 'center',
          paddingLeft: 0,
          listStyleType: 'none',
          fontSize: [2, null, 1],
          lineHeight: 2,
          textAlign: 'center',

          'li + li': {
            marginLeft: [0, null, 4],

            '&::before': {
              content: [null, null, '"\u2022"'],
              color: 'accent',
              marginRight: 4,
            },
          },
        }}
      >
        <li>
          <NextLink href="/" passHref>
            <Link variant="ui">Home</Link>
          </NextLink>
        </li>

        <li>
          <NextLink href="/recipes" passHref>
            <Link variant="ui">Recipes</Link>
          </NextLink>
        </li>

        <li>
          <NextLink href="/categories" passHref>
            <Link variant="ui">Categories</Link>
          </NextLink>
        </li>

        <li>
          <NextLink href="/tags" passHref>
            <Link variant="ui">Tags</Link>
          </NextLink>
        </li>

        <li>
          <NextLink href="/about" passHref>
            <Link variant="ui">About</Link>
          </NextLink>
        </li>
      </Flex>
    </Container>
  </Box>
)

export default Footer
