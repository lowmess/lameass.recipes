import * as React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Text, Heading, Link } from 'theme-ui'
import Highlight from '../components/Highlight'
import metadata from '../constants/metadata.json'
import { getAboutPage } from '../api'

interface AboutPageProps {
	title: string
	content: string
}

const AboutPage: React.FC<AboutPageProps> = ({ title = 'About', content }) => (
	<React.Fragment>
		<Head>
			<title key="title">
				{title} {metadata.titleSuffix}
			</title>
			<meta name="description" content={metadata.description} />
		</Head>

		<Heading as="h1" variant="page-name" my={[5, null, 6]}>
			<Highlight>{title}</Highlight>
		</Heading>

		<Text
			sx={{
				fontSize: [4, null, 5],
				lineHeight: 'heading',

				p: {
					margin: 0,
				},

				a: {
					color: 'text',
					textDecorationColor: (theme) => theme.colors.accent,

					'&:hover': {
						color: 'accent',
					},
				},

				'&:empty': {
					display: 'none',
				},
			}}
			dangerouslySetInnerHTML={{ __html: content }}
		/>

		<Text
			as="p"
			sx={{
				marginTop: 4,
				marginBottom: 5,
				fontSize: [4, null, 5],
				lineHeight: 'heading',
			}}
		>
			The website is by <Link href="https://lowmess.com">Alec Lomas</Link>. It
			is made with <Link href="https://nextjs.org">Next.js</Link> &{' '}
			<Link href="https://www.sanity.io">Sanity</Link>, and hosted on{' '}
			<Link href="https://vercel.com">Vercel</Link>. The headline font is{' '}
			<Link href="https://regularbolditalic.com/fonts/staat">Staat</Link>, and
			the icon set is&nbsp;
			<Link href="https://phosphoricons.com">Phosphor</Link>.
		</Text>
	</React.Fragment>
)

export const getStaticProps: GetStaticProps = async () => {
	const { title, content } = await getAboutPage()

	return {
		props: { title, content },
	}
}

export default AboutPage
