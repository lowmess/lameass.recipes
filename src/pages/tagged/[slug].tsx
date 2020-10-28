import * as React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { Heading } from 'theme-ui'
import { getAllTags, getTagBySlug, getAllRecipesByTag } from '../../../lib/api'
import { Recipe, Tag } from '../../types/Recipe'

interface TagPageProps {
  tag: Tag
  recipes: Recipe[]
}

const TagPage: React.FC<TagPageProps> = ({ tag, recipes }) => (
  <React.Fragment>
    <Heading>{tag.title}</Heading>

    <pre>{JSON.stringify(recipes, null, 2)}</pre>
  </React.Fragment>
)

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const tag = await getTagBySlug(params.slug)
  const recipes = await getAllRecipesByTag(params.slug)

  return {
    props: { tag, recipes },
    revalidate: 60,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getAllTags()

  const paths = categories.map((c) => ({ params: { slug: c.slug } })) || []

  return {
    paths,
    fallback: false,
  }
}

export default TagPage
