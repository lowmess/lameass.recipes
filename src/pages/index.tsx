import * as React from 'react'
import { GetStaticProps } from 'next'
import { default as NextLink } from 'next/link'
import { Box, Grid, Heading, Link } from 'theme-ui'
import { getHomepage, getAllRecipes } from '../../lib/api'
import unwidow from '../../lib/unwidow'
import smartypants from '../../lib/smartypants'
import { Recipe } from '../types/Recipe'

interface HomepageProps {
  headline: string
  featuredRecipes?: Recipe[]
  showRecentRecipes: boolean
  recentRecipes?: Recipe[]
}

const Homepage: React.FC<HomepageProps> = ({
  headline,
  featuredRecipes = [],
  showRecentRecipes = true,
  recentRecipes = [],
}) => (
  <React.Fragment>
    <Heading as="h1" variant="headline" mt={6}>
      {headline}
    </Heading>

    {featuredRecipes.length > 0 && (
      <Box mt={6}>
        <Heading>Featured Recipes</Heading>

        <Grid columns={3} gap={4} mt={4}>
          {featuredRecipes.map((recipe) => (
            <NextLink key={recipe.id} href={`/recipes/${recipe.slug}`} passHref>
              <Link>{recipe.title}</Link>
            </NextLink>
          ))}
        </Grid>
      </Box>
    )}

    {showRecentRecipes && recentRecipes.length > 0 && (
      <Box mt={7}>
        <Heading>Recent Recipes</Heading>

        <Grid columns={3} gap={4} mt={4}>
          {featuredRecipes.map((recipe) => (
            <p key={recipe.id}>{recipe.title}</p>
          ))}
        </Grid>
      </Box>
    )}
  </React.Fragment>
)

export const getStaticProps: GetStaticProps = async () => {
  const { headline, featuredRecipes, showRecentRecipes } = await getHomepage()
  const allRecipes = await getAllRecipes()

  const formattedHeadline = unwidow(smartypants(headline))

  const recentRecipes = showRecentRecipes ? allRecipes.slice(0, 3) : []

  return {
    props: {
      headline: formattedHeadline,
      featuredRecipes,
      showRecentRecipes,
      recentRecipes,
    },
    revalidate: 60,
  }
}

export default Homepage
