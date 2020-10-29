import * as React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { getAllRecipes, getRecipeBySlug } from '../../../lib/api'
import { Recipe } from '../../types/Recipe'
import { PageProps } from '../../types/Page'

interface RecipePageProps extends PageProps {
  recipe: Recipe
}

const RecipePage: React.FC<RecipePageProps> = ({
  recipe,
  titleSuffix,
  description,
}) => (
  <React.Fragment>
    <Head>
      <title key="title">
        {recipe.title}
        {titleSuffix}
      </title>
      <meta name="description" content={description} />
    </Head>

    <pre>{JSON.stringify(recipe, null, 2)}</pre>
  </React.Fragment>
)

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const {
    recipe,
    site: {
      globalSeo: {
        titleSuffix,
        fallbackSeo: { description },
      },
    },
  } = await getRecipeBySlug(params.slug)

  return {
    props: { recipe, titleSuffix, description },
    revalidate: 60,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { allRecipes } = await getAllRecipes()
  const paths = allRecipes.map((r) => ({ params: { slug: r.slug } })) || []

  return {
    paths,
    fallback: false,
  }
}

export default RecipePage
