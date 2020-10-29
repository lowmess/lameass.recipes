import * as React from 'react'
import Head from 'next/head'
import { Flex, Container } from 'theme-ui'
import Nav from './Nav'
import Footer from './Footer'

const Layout: React.FC = ({ children }) => (
  <React.Fragment>
    <Head>
      {/*
       * Shouldn't be set in `_document`:
       * https://github.com/vercel/next.js/blob/master/errors/no-document-viewport-meta.md
       */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    <Flex sx={{ flexDirection: 'column', minHeight: '100vh' }}>
      <Nav />

      <Container as="main" id="main-content" sx={{ flex: 1 }}>
        {children}
      </Container>

      <Footer />
    </Flex>
  </React.Fragment>
)

export default Layout
