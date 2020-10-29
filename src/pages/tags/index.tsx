import * as React from 'react'
import { GetStaticProps } from 'next'
import { default as NextLink } from 'next/link'
import { Link } from 'theme-ui'
import HighlightHeading from '../../components/HighlightHeading'
import Inline from '../../components/Inline'
import { getAllTags } from '../../../lib/api'
import { Tag } from '../../types/Recipe'

interface TagsPageProps {
  tags: Tag[]
}

const TagsPage: React.FC<TagsPageProps> = ({ tags }) => (
  <React.Fragment>
    <HighlightHeading as="h1" variant="page-name" my={[5, null, 6]}>
      All Tags
    </HighlightHeading>

    <Inline gap={3} mb={5}>
      {tags.map(({ id, title, slug }) => (
        <NextLink key={id} href={`/categories/${slug}`} passHref>
          <Link variant="tag" sx={{ fontSize: 2 }}>
            {title}
          </Link>
        </NextLink>
      ))}
    </Inline>
  </React.Fragment>
)

export const getStaticProps: GetStaticProps = async () => {
  const tags = await getAllTags()

  return {
    props: { tags },
    revalidate: 60,
  }
}

export default TagsPage
