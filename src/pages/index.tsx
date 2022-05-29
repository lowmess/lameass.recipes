import * as React from 'react'
import Head from 'next/head'
import metadata from '../constants/metadata.json'

const Homepage: React.FC = () => (
	<React.Fragment>
		<Head>
			<title key="title">{metadata.title}</title>
			<meta name="description" content={metadata.description} />
		</Head>

		<h1>homepage</h1>
	</React.Fragment>
)

export default Homepage
