import * as React from 'react'
import type { AppProps } from 'next/app'

// CSS normalization
import 'sanitize.css'
import 'sanitize.css/typography.css'

// global CSS
import '../styles/_global.css'
import '../styles/_fonts.css'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
	<Component {...pageProps} />
)

export default App
