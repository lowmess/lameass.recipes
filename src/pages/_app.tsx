import * as React from 'react'
import type { AppProps } from 'next/app'

// CSS normalization
import 'sanitize.css'
import 'sanitize.css/typography.css'

// global CSS
import '../styles/_global.css'
import '../styles/_fonts.css'

// force reset styles to appear in stylesheet first
import '../styles/reset.css'

import { Layout } from '../components/Layout'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
	<Layout>
		<Component {...pageProps} />
	</Layout>
)

export default App
