import * as React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Text, Link } from 'theme-ui'
import { getAboutPage } from '../../lib/api'
import HighlightHeading from '../components/HighlightHeading'
import { PageProps } from '../types/Page'

interface AboutPageProps extends PageProps {
  title: string
  content: string
}

const AboutPage: React.FC<AboutPageProps> = ({
  title = 'About',
  content,
  titleSuffix,
  description,
}) => (
  <React.Fragment>
    <Head>
      <title key="title">
        {title}
        {titleSuffix}
      </title>
      <meta name="description" content={description} />
    </Head>

    <HighlightHeading as="h1" variant="page-name" my={[5, null, 6]}>
      {title}
    </HighlightHeading>

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
      The website is by by <Link href="https://lowmess.com">Alec Lomas</Link>.
      It is made with <Link href="https://nextjs.org">Next.js</Link> &{' '}
      <Link href="https://www.datocms.com">DatoCMS</Link>, and hosted on{' '}
      <Link href="https://vercel.com">Vercel</Link>. The headline font is{' '}
      <Link href="https://regularbolditalic.com/fonts/staat">Staat</Link>, and
      the icon set is&nbsp;
      <Link href="https://phosphoricons.com">Phosphor</Link>.
    </Text>
  </React.Fragment>
)

export const getStaticProps: GetStaticProps = async () => {
  const {
    aboutPage: { title, content },
    site: {
      globalSeo: {
        titleSuffix,
        fallbackSeo: { description },
      },
    },
  } = await getAboutPage()

  return {
    props: { title, content, titleSuffix, description },
    revalidate: 60,
  }
}

export default AboutPage
