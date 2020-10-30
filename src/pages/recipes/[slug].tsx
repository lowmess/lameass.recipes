import * as React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { default as NextLink } from 'next/link'
import { useThemeUI, Box, Flex, Text, Heading, Link } from 'theme-ui'
import { FolderSimple, Tag, Clock, Users } from 'phosphor-react'
import minutesToHours from '../../../lib/minutesToHours'
import Stack from '../../components/Stack'
import Inline from '../../components/Inline'
import RecipeGrid from '../../components/RecipeGrid'
import {
  getAllRecipes,
  getAllRecipesByCategory,
  getRecipeBySlug,
} from '../../../lib/api'
import { Recipe } from '../../types/Recipe'
import { PageProps } from '../../types/Page'

interface RecipePageProps extends PageProps {
  recipe: Recipe
  similarRecipes: Recipe[]
}

const RecipePage: React.FC<RecipePageProps> = ({
  recipe,
  similarRecipes,
  titleSuffix,
  description,
}) => {
  const { colorMode } = useThemeUI()
  const {
    title,
    prepTime,
    cookTime,
    servingSize,
    ingredients,
    steps,
    category,
    tags,
  } = recipe

  return (
    <React.Fragment>
      <Head>
        <title key="title">
          {recipe.title}
          {titleSuffix}
        </title>
        <meta name="description" content={description} />
      </Head>

      <Box
        sx={{
          position: 'relative',
          marginY: [5, null, 6],

          '.swash': {
            position: 'absolute',
            top: [-4, null, '-5rem'],
            left: [-5, null, -6],
            width: [256, null, 512],
            height: [90, null, 180],
            userSelect: 'none',
          },
        }}
      >
        <img
          width="512"
          height="180"
          alt=""
          src={`/images/recipe-swash-${colorMode}.png`}
          srcSet={`/images/recipe-swash-${colorMode}@2x.png 2x`}
          className="swash"
        />

        <Box sx={{ position: 'relative' }}>
          <Heading as="h1" sx={{ fontSize: [5, null, 6] }}>
            {title}
          </Heading>

          <Stack gap={2} sx={{ marginTop: 3, fontSize: 2 }}>
            {(prepTime || cookTime) && (
              <Flex sx={{ alignItems: 'center' }}>
                <Clock weight="bold" />

                {prepTime > 0 && (
                  <Text as="span" ml={3}>
                    {minutesToHours(prepTime)} prep
                  </Text>
                )}

                {prepTime > 0 && cookTime > 0 && (
                  <Text as="span" ml={3} color="accent">
                    &bull;
                  </Text>
                )}

                {cookTime > 0 && (
                  <Text as="span" ml={3}>
                    {minutesToHours(cookTime)} cook
                  </Text>
                )}
              </Flex>
            )}

            {servingSize && (
              <Flex sx={{ alignItems: 'center' }}>
                <Users weight="bold" />

                <Text as="span" ml={3}>
                  {servingSize}
                </Text>
              </Flex>
            )}

            <Flex sx={{ alignItems: 'center' }}>
              <FolderSimple weight="bold" />

              <NextLink href={`/categories/${category.slug}`} passHref>
                <Link variant="ui" ml={3}>
                  {category.title}
                </Link>
              </NextLink>
            </Flex>
            {tags.length > 0 && (
              <Flex sx={{ alignItems: 'center' }}>
                <Tag weight="bold" />

                <Inline gap={3} ml={3}>
                  {tags.map((tag) => (
                    <NextLink key={tag.id} href={`/tags/${tag.slug}`} passHref>
                      <Link variant="tag">{tag.title}</Link>
                    </NextLink>
                  ))}
                </Inline>
              </Flex>
            )}
          </Stack>

          {ingredients.length > 0 && (
            <React.Fragment>
              <Heading mt={[5, null, 6]} mb={3}>
                Ingredients
              </Heading>

              <Text as="ul" sx={{ paddingLeft: 0, listStyleType: 'none' }}>
                {ingredients.map(({ id, value }) => (
                  <Text
                    key={id}
                    as="li"
                    sx={{
                      paddingY: 2,
                      paddingX: 3,
                      borderRadius: 2,
                      fontSize: [1, null, 2],

                      '&:nth-of-type(even)': {
                        backgroundColor: 'muted',
                      },
                    }}
                  >
                    {value}
                  </Text>
                ))}
              </Text>
            </React.Fragment>
          )}

          {steps.length > 0 && (
            <React.Fragment>
              <Heading mt={[5, null, 6]} mb={3}>
                Directions
              </Heading>

              <Box as="ol" sx={{ paddingLeft: 4 }}>
                {steps.map(({ id, value }) => (
                  <Text
                    key={id}
                    as="li"
                    sx={{
                      maxWidth: '55ch',
                      paddingY: 2,
                      fontSize: [1, null, 2],
                    }}
                  >
                    {value}
                  </Text>
                ))}
              </Box>
            </React.Fragment>
          )}

          {similarRecipes.length > 0 && (
            <React.Fragment>
              <Heading mt={[5, 6]} mb={4}>
                Other {category.title} recipes:
              </Heading>

              <RecipeGrid recipes={similarRecipes} />
            </React.Fragment>
          )}
        </Box>
      </Box>
    </React.Fragment>
  )
}

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
  const { allRecipes } = await getAllRecipesByCategory(recipe.category.slug)

  const similarRecipes =
    allRecipes.filter((r) => r.id !== recipe.id).slice(0, 6) || []

  return {
    props: { recipe, similarRecipes, titleSuffix, description },
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
