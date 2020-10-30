import * as React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { default as NextLink } from 'next/link'
import { Text, Link } from 'theme-ui'
import { getAllRecipes } from '../../lib/api'
import HighlightHeading from '../components/HighlightHeading'
import RecipeGrid from '../components/RecipeGrid'
import { Recipe } from '../types/Recipe'
import { PageProps } from '../types/Page'

interface ErrorPageProps extends PageProps {
  recipes: Recipe[]
}

const ErrorPage: React.FC<ErrorPageProps> = ({
  recipes,
  titleSuffix,
  description,
}) => (
  <React.Fragment>
    <Head>
      <title key="title">Oops!{titleSuffix}</title>
      <meta name="description" content={description} />
    </Head>

    <HighlightHeading as="h1" variant="page-name" my={[5, null, 6]}>
      Error 404
    </HighlightHeading>

    <Text as="p" sx={{ marginBottom: 5, fontSize: [3, null, 4] }}>
      Oops! We couldn&rsquo;t find that, but we&rsquo;re on the case. Maybe take
      a peek at one of these new{' '}
      <NextLink href="/recipes" passHref>
        <Link>recipes</Link>
      </NextLink>{' '}
      in the mean&nbsp;time:
    </Text>

    <RecipeGrid mb={5} recipes={recipes} />
  </React.Fragment>
)

export const getStaticProps: GetStaticProps = async () => {
  const {
    allRecipes,
    site: {
      globalSeo: {
        titleSuffix,
        fallbackSeo: { description },
      },
    },
  } = await getAllRecipes()

  const recipes = allRecipes?.slice(0, 6) || []

  return {
    props: { recipes, titleSuffix, description },
    revalidate: 60,
  }
}

export default ErrorPage
