import * as React from 'react'
import { Text, Link } from 'theme-ui'
import HighlightHeading from '../components/HighlightHeading'

const AboutPage: React.FC = () => (
  <React.Fragment>
    <HighlightHeading as="h1" variant="page-name" my={[5, null, 6]}>
      About
    </HighlightHeading>

    <Text as="p" sx={{ fontSize: [4, null, 5], lineHeight: 'heading' }}>
      lameass.recipes features recipes developed by Kayla&nbsp;Lomas.
    </Text>

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

export default AboutPage
