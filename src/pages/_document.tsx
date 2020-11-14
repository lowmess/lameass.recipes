/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { InitializeColorMode } from 'theme-ui'

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />

					{/* icons */}
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						href="/favicon-32x32.png"
						sizes="32x32"
					/>
					<link
						rel="icon"
						type="image/png"
						href="/favicon-16x16.png"
						sizes="16x16"
					/>
				</Head>

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
