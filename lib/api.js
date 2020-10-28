/* eslint-disable import/exports-last */
const API_URL = 'https://graphql.datocms.com'
const API_TOKEN = process.env.DATOCMS_API_TOKEN

const stripHTML = (str) => {
  const re = /^(<p>)|(<\/p>)$/g

  return str.replace(re, '')
}

const fetchAPI = async (query, { variables } = {}) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()

  if (json.errors) {
    console.error(json.errors)

    throw new Error('Failed to fetch API')
  }

  return json.data
}

export const getHomepage = async () => {
  const data = await fetchAPI(
    `
      query getHomepage {
        homepage {
          headline
          featuredRecipes {
            id
            title
            slug
            prepTime
            cookTime
            category {
              title
              emoji
              slug
            }
            tags {
              title
              slug
            }
          }
          showRecentRecipes
        }
      }
    `
  )

  return data?.homepage
}

export const getAllRecipes = async () => {
  const data = await fetchAPI(
    `
      query getAllRecipes {
        allRecipes(orderBy: createdAt_DESC) {
          id
          title
          slug
          prepTime
          cookTime
          category {
            title
            emoji
            slug
          }
          tags {
            title
            slug
          }
        }
      }
    `
  )

  return data?.allRecipes
}

export const getRecipeBySlug = async (slug) => {
  const data = await fetchAPI(
    `
      query getRecipeBySlug($slug: String!) {
        recipe(filter: {slug: {eq: $slug}}) {
          title
          category {
            title
            emoji
            slug
          }
          tags {
            title
            slug
          }
          prepTime
          cookTime
          servingSize
          recipe {
            ... on IngredientRecord {
              __typename
              id
              name
            }
            ... on DirectionRecord {
              __typename
              id
              step
            }
          }
        }
      }
    `,
    { variables: { slug } }
  )

  const ingredients = data?.recipe?.recipe
    ?.filter((i) => i.__typename === 'IngredientRecord')
    .map((i) => ({
      id: i.id,
      value: i.name,
    }))

  const steps = data?.recipe?.recipe
    ?.filter((s) => s.__typename === 'DirectionRecord')
    .map((s) => ({
      id: s.id,
      value: stripHTML(s.step),
    }))

  return {
    ...data?.recipe,

    ingredients,
    steps,
  }
}

export const getAllCategories = async () => {
  const data = await fetchAPI(
    `
      query getAllCategories {
        allCategories {
          id
          title
          emoji
          slug
        }
      }
    `
  )

  return data?.allCategories
}

export const getCategoryBySlug = async (slug) => {
  const data = await fetchAPI(
    `
      query getCategoryBySlug($slug: String!) {
        category(filter: { slug: { eq: $slug }}) {
          id
          title
          emoji
          slug
        }
      }
    `,
    { variables: { slug } }
  )

  return data?.category
}

export const getAllRecipesByCategory = async (slug) => {
  const category = await getCategoryBySlug(slug)

  const data = await fetchAPI(
    `
      query getAllRecipesByCategory($category: ItemId!) {
        allRecipes(filter: { category: { eq: $category }}) {
          id
          title
          slug
          prepTime
          cookTime
          category {
            title
            emoji
            slug
          }
          tags {
            title
            slug
          }
        }
      }
    `,
    { variables: { category: category.id } }
  )

  return data?.allRecipes
}

export const getAllTags = async () => {
  const data = await fetchAPI(
    `
      query getAllTags {
        allTags {
          id
          title
          slug
        }
      }
    `
  )

  return data?.allTags
}

export const getTagBySlug = async (slug) => {
  const data = await fetchAPI(
    `
      query getTagBySlug($slug: String!) {
        tag(filter: { slug: { eq: $slug }}) {
          id
          title
          slug
        }
      }
    `,
    { variables: { slug } }
  )

  return data?.tag
}

export const getAllRecipesByTag = async (slug) => {
  const tag = await getTagBySlug(slug)

  const data = await fetchAPI(
    `
      query getAllRecipesByTag($tag: ItemId!) {
        allRecipes(filter: { tag: { eq: $tag }}) {
          id
          title
          slug
          prepTime
          cookTime
          category {
            title
            emoji
            slug
          }
          tags {
            title
            slug
          }
        }
      }
    `,
    {
      variable: { tag: tag.id },
    }
  )

  return data?.allRecipes
}
