import * as React from 'react'
import { default as NextLink } from 'next/link'
import { Box, Flex, Card, Heading, Text, Link } from 'theme-ui'
import { Clock } from 'phosphor-react'
import { ThemeUIProps } from '../types/ThemeUIComponent'
import { Recipe } from '../types/Recipe'
import Inline from './Inline'

interface RecipePreviewProps extends ThemeUIProps {
  recipe: Recipe
  level?: 'h2' | 'h3' | 'h4' | 'h5' | 'h5'
}

const RecipePreview: React.FC<RecipePreviewProps> = ({
  recipe,
  level = 'h3',
  sx,
  ...props
}) => {
  const { title, slug, category, tags, prepTime = 0, cookTime = 0 } = recipe

  const totalTime = prepTime + cookTime

  return (
    <Card sx={{ padding: 3, ...sx }} {...props}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          height: '2rem',
          backgroundColor: 'primary',
        }}
      />

      <Flex
        sx={{ flexDirection: 'column', height: '100%', position: 'relative' }}
      >
        <Text sx={{ fontSize: 5, lineHeight: 'solid' }} aria-hidden>
          {category.emoji}
        </Text>

        <Heading as={level} variant="recipe-name" mt={3}>
          <NextLink href={`/recipes/${slug}`} passHref>
            <Link variant="ui">{title}</Link>
          </NextLink>
        </Heading>

        <Text
          sx={{
            marginTop: 1,
            marginBottom: tags.length || totalTime > 0 ? 4 : 0,
            fontSize: 0,
            fontWeight: 'bold',
            textTransform: 'uppercase',
            color: 'accent',
          }}
        >
          <NextLink href={`/categories/${category.slug}`} passHref>
            <Link variant="category">{category.title}</Link>
          </NextLink>
        </Text>

        {tags.length > 0 && (
          <Inline gap={2} pb={totalTime > 0 ? 2 : 0}>
            {tags.map((tag) => (
              <NextLink key={tag.id} href={`/tagged/${tag.slug}`} passHref>
                <Link variant="tag">{tag.title}</Link>
              </NextLink>
            ))}
          </Inline>
        )}

        {totalTime > 0 && (
          <Text
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              marginTop: 'auto',
              fontSize: 0,
              color: 'muted-text',

              svg: {
                marginRight: 2,
                fontSize: 1,
              },
            }}
          >
            <Clock /> {totalTime} minutes
          </Text>
        )}
      </Flex>
    </Card>
  )
}

export default RecipePreview
