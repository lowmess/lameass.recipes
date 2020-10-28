import * as React from 'react'
import { GetStaticProps } from 'next'
import { default as NextLink } from 'next/link'
import { Link } from 'theme-ui'
import { getAllCategories } from '../../../lib/api'
import { Category } from '../../types/Recipe'

interface CategoriesPageProps {
  categories: Category[]
}

const CategoriesPage: React.FC<CategoriesPageProps> = ({ categories }) => (
  <ul>
    {categories.map(({ id, title, emoji, slug }) => (
      <li key={id}>
        <NextLink href={`/categories/${slug}`} passHref>
          <Link>
            {emoji} {title}
          </Link>
        </NextLink>
      </li>
    ))}
  </ul>
)

export const getStaticProps: GetStaticProps = async () => {
  const categories = await getAllCategories()

  return {
    props: { categories },
    revalidate: 60,
  }
}

export default CategoriesPage
