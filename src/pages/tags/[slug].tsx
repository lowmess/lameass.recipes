import * as React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import HighlightHeading from '../../components/HighlightHeading'
import RecipeGrid from '../../components/RecipeGrid'
import { getAllTags, getTagBySlug, getAllRecipesByTag } from '../../../lib/api'
import { Recipe, Tag } from '../../types/Recipe'
import { PageProps } from '../../types/Page'

interface TagPageProps extends PageProps {
  tag: Tag
  recipes: Recipe[]
}

const TagPage: React.FC<TagPageProps> = ({
  tag,
  recipes,
  titleSuffix,
  description,
}) => (
  <React.Fragment>
    <Head>
      <title key="title">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Recipes tagged "{tag.title}"{titleSuffix}
      </title>
      <meta name="description" content={description} />
    </Head>

    <HighlightHeading as="h1" variant="page-name" my={[5, null, 6]}>
      {tag.title}
    </HighlightHeading>

    <RecipeGrid mb={5} recipes={recipes} />
  </React.Fragment>
)

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const {
    tag,
    site: {
      globalSeo: {
        titleSuffix,
        fallbackSeo: { description },
      },
    },
  } = await getTagBySlug(params.slug)
  const { allRecipes: recipes } = await getAllRecipesByTag(params.slug)

  return {
    props: { tag, recipes, titleSuffix, description },
    revalidate: 60,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { allTags } = await getAllTags()

  const paths = allTags?.map((c) => ({ params: { slug: c.slug } })) || []

  return {
    paths,
    fallback: false,
  }
}

export default TagPage
