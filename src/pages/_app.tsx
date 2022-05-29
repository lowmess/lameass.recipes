import * as React from 'react'
import type { AppProps } from 'next/app'

import 'sanitize.css'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
	<Component {...pageProps} />
)

export default App
