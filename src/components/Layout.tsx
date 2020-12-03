import * as React from 'react'
import Head from 'next/head'
import { Global, css } from '@emotion/core'
import { useThemeUI, Flex, Container } from 'theme-ui'
import Nav from './Nav'
import Footer from './Footer'

const Layout: React.FC = ({ children }) => {
	const { theme } = useThemeUI()

	return (
		<React.Fragment>
			<Global
				styles={css`
					::selection {
						background-color: ${theme.colors.accent};
						color: ${theme.colors.text};
					}

					html {
						font-variant-ligatures: common-ligatures discretionary-ligatures;
						scroll-behavior: smooth;

						@media (prefers-reduced-motion: reduce) {
							scroll-behavior: auto;
						}

						@media (min-width: 100em) {
							font-size: 112.5%;
						}
					}

					@media print {
						* {
							background-color: transparent !important;
							color: #000 !important;
						}

						nav,
						footer {
							display: none;
						}
					}

					body {
						margin: 0;
						cursor: default;
					}

					sub,
					sup {
						vertical-align: baseline;
						position: relative;
						top: -0.4em;
					}
				`}
			/>

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
}

export default Layout
