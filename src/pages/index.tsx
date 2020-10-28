import * as React from 'react'
import { GetStaticProps } from 'next'
import { default as NextLink } from 'next/link'
import { useThemeUI, Box, Flex, Grid, Heading, Link } from 'theme-ui'
import { ArrowRight } from 'phosphor-react'
import Stack from '../components/Stack'
import RecipePreview from '../components/RecipePreview'
import { getHomepage, getAllRecipes } from '../../lib/api'
import unwidow from '../../lib/unwidow'
import smartypants from '../../lib/smartypants'
import { Recipe } from '../types/Recipe'

interface HomepageProps {
  headline: string
  featuredRecipes?: Recipe[]
  recentRecipes?: Recipe[]
}

const Homepage: React.FC<HomepageProps> = ({
  headline,
  featuredRecipes = [],
  recentRecipes = [],
}) => {
  const { colorMode } = useThemeUI()

  return (
    <React.Fragment>
      <Box
        sx={{
          marginTop: 5,
          marginBottom: [3, null, 4],
          paddingTop: 5,
          paddingBottom: [3, null, 4],
          backgroundImage: `url(/images/headline-swash-${colorMode}.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '15%',
          backgroundSize: '70%',

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

            <Grid columns={[1, null, 2, 3]} gap={4} mt={4}>
              {featuredRecipes.map((recipe) => (
                <RecipePreview key={recipe.id} recipe={recipe} />
              ))}
            </Grid>
          </Box>
        )}

        <Box>
          <Flex sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <Heading>Recent Recipes</Heading>

            <NextLink href="/recipes" passHref>
              <Link variant="view-all">
                View All <ArrowRight weight="bold" />
              </Link>
            </NextLink>
          </Flex>

          <Grid columns={[1, null, 2, 3]} gap={4} mt={4}>
            {recentRecipes.map((recipe) => (
              <RecipePreview key={recipe.id} recipe={recipe} />
            ))}
          </Grid>
        </Box>
      </Stack>
    </React.Fragment>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { headline, featuredRecipes } = await getHomepage()
  const allRecipes = await getAllRecipes()

  const formattedHeadline = unwidow(smartypants(headline))

  const recentRecipes = allRecipes.slice(0, 6) || []

  return {
    props: {
      headline: formattedHeadline,
      featuredRecipes,
      recentRecipes,
    },
    revalidate: 60,
  }
}

export default Homepage
