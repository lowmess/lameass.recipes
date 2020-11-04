import * as React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { default as NextLink } from 'next/link'
import { Link } from 'theme-ui'
import HighlightHeading from '../../components/HighlightHeading'
import Inline from '../../components/Inline'
import { getAllTags } from '../../../lib/api'
import { Tag } from '../../types/Recipe'
import { PageProps } from '../../types/Page'

interface TagsPageProps extends PageProps {
  tags: Tag[]
}

const TagsPage: React.FC<TagsPageProps> = ({
  tags,
  titleSuffix,
  description,
}) => (
  <React.Fragment>
    <Head>
      <title key="title">All Tags{titleSuffix}</title>
      <meta name="description" content={description} />
    </Head>

    <HighlightHeading as="h1" variant="page-name" my={[5, null, 6]}>
      All Tags
    </HighlightHeading>

    <Inline gap={3} pb={5}>
      {tags.map(({ id, title, slug }) => (
        <NextLink key={id} href={`/tags/${slug}`} passHref>
          <Link variant="tag" sx={{ fontSize: 2 }}>
            {title}
          </Link>
        </NextLink>
      ))}
    </Inline>
  </React.Fragment>
)

export const getStaticProps: GetStaticProps = async () => {
  const {
    allTags: tags,
    site: {
      globalSeo: {
        titleSuffix,
        fallbackSeo: { description },
      },
    },
  } = await getAllTags()

  return {
    props: { tags, titleSuffix, description },
    revalidate: 60,
  }
}

export default TagsPage
