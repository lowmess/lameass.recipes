/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { InitializeColorMode } from 'theme-ui'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />

        <body>
          <InitializeColorMode />

          <Main />

          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
