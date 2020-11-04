import * as React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { default as NextLink } from 'next/link'
import { useThemeUI, Box, Flex, Heading, Link } from 'theme-ui'
import { ArrowRight } from 'phosphor-react'
import Stack from '../components/Stack'
import RecipeGrid from '../components/RecipeGrid'
import { getHomepage, getAllRecipes } from '../../lib/api'
import unwidow from '../../lib/unwidow'
import smartypants from '../../lib/smartypants'
import { Recipe } from '../types/Recipe'
import { PageProps } from '../types/Page'

interface HomepageProps extends PageProps {
  headline: string
  featuredRecipes?: Recipe[]
  recentRecipes?: Recipe[]
}

const Homepage: React.FC<HomepageProps> = ({
  headline,
  featuredRecipes = [],
  recentRecipes = [],
  siteName,
  description,
}) => {
  const { colorMode } = useThemeUI()

  return (
    <React.Fragment>
      <Head>
        <title key="title">{siteName}</title>
        <meta name="description" content={description} />
      </Head>

      <Box
        sx={{
          marginTop: 5,
          paddingTop: [3, null, 4],
          paddingBottom: [3, null, 4],
          backgroundImage: `url(/images/headline-swash-${colorMode}.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '20% center',
          backgroundSize: 'contain',

          '@media (min-width: 44em), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)': {
            backgroundImage: `url(/images/headline-swash-${colorMode}@2x.png)`,
          },

          '@media (min-width: 64em)': {
            backgroundPosition: '25%',
          },
        }}
      >
        <Heading as="h1" variant="headline">
          {headline}
        </Heading>
      </Box>

      <Stack gap={[5, null, 6]} my={[5, 6]}>
        {featuredRecipes.length > 0 && (
          <Box>
            <Heading>Featured Recipes</Heading>

            <RecipeGrid mt={4} recipes={featuredRecipes} />
          </Box>
        )}

        <Box>
          <Flex
            sx={{
              flexDirection: ['column', 'row'],
              alignItems: [null, 'center'],
              justifyContent: 'space-between',
            }}
          >
            <Heading>Recent Recipes</Heading>

            <NextLink href="/recipes" passHref>
              <Link variant="view-all">
                View All <ArrowRight weight="bold" />
              </Link>
            </NextLink>
          </Flex>

          <RecipeGrid mt={4} recipes={recentRecipes} />
        </Box>
      </Stack>
    </React.Fragment>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const {
    homepage: { headline, featuredRecipes },
    site: {
      globalSeo: {
        siteName,
        fallbackSeo: { description },
      },
    },
  } = await getHomepage()

  const { allRecipes } = await getAllRecipes()

  const formattedHeadline = unwidow(smartypants(headline))

  const recentRecipes = allRecipes?.slice(0, 6) || []

  return {
    props: {
      headline: formattedHeadline,
      featuredRecipes,
      recentRecipes,
      siteName,
      description,
    },
    revalidate: 60,
  }
}

export default Homepage
