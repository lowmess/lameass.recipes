import * as React from 'react'
import { Flex, Container } from 'theme-ui'
import Nav from './Nav'
import Footer from './Footer'

const Layout: React.FC = ({ children }) => (
  <Flex sx={{ flexDirection: 'column', minHeight: '100vh' }}>
    <Nav />

    <Container as="main" sx={{ flex: 1 }}>
      {children}
    </Container>

    <Footer />
  </Flex>
)

export default Layout
