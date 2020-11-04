/* eslint-disable import/exports-last */
const API_URL = 'https://graphql.datocms.com'
const API_TOKEN = process.env.DATOCMS_API_TOKEN

const stripHTML = (str) => {
  const re = /^(<p>)|(<\/p>)$/g

  return str.replace(re, '')
}

const recipeFieldsFragment = `
    id
    title
    slug
    prepTime
    cookTime
    servingSize
    category {
      title
      emoji
      slug
    }
    tags {
      title
      slug
    }
  `

const siteSEOFragment = `
    site: _site {
      globalSeo {
        siteName
        titleSuffix
        fallbackSeo {
          description
        }
      }
    }
  `

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
            ${recipeFieldsFragment}
          }
        }
        ${siteSEOFragment}
      }
    `
  )

  return data
}

export const getAboutPage = async () => {
  const data = await fetchAPI(
    `
      query getAboutPage {
        aboutPage {
          title
          content
        }
        ${siteSEOFragment}
      }
    `
  )

  return data
}

export const getAllRecipes = async () => {
  const data = await fetchAPI(
    `
      query getAllRecipes {
        allRecipes(orderBy: createdAt_DESC) {
          ${recipeFieldsFragment}
        }
        ${siteSEOFragment}
      }
    `
  )

  return data
}

export const getRecipeBySlug = async (slug) => {
  const data = await fetchAPI(
    `
      query getRecipeBySlug($slug: String!) {
        recipe(filter: {slug: {eq: $slug}}) {
          ${recipeFieldsFragment}
          notes
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
        ${siteSEOFragment}
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
    ...data,
    recipe: {
      ...data?.recipe,

      ingredients,
      steps,
    },
  }
}

export const getAllCategories = async () => {
  const data = await fetchAPI(
    `
      query getAllCategories {
        allCategories(orderBy: title_ASC) {
          id
          title
          emoji
          slug
        }
        ${siteSEOFragment}
      }
    `
  )

  return data
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
        ${siteSEOFragment}
      }
    `,
    { variables: { slug } }
  )

  return data
}

export const getAllRecipesByCategory = async (slug) => {
  const { category } = await getCategoryBySlug(slug)

  const data = await fetchAPI(
    `
      query getAllRecipesByCategory($category: ItemId!) {
        allRecipes(filter: { category: { eq: $category }}) {
          ${recipeFieldsFragment}
        }
        ${siteSEOFragment}
      }
    `,
    { variables: { category: category.id } }
  )

  return data
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
        ${siteSEOFragment}
      }
    `
  )

  return data
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
        ${siteSEOFragment}
      }
    `,
    { variables: { slug } }
  )

  return data
}

export const getAllRecipesByTag = async (slug) => {
  const { tag } = await getTagBySlug(slug)

  const data = await fetchAPI(
    `
      query getAllRecipesByTag($tag: ItemId!) {
        allRecipes(filter: { tags: { allIn: [$tag] }}) {
          ${recipeFieldsFragment}
        }
        ${siteSEOFragment}
      }
    `,
    {
      variables: { tag: tag.id },
    }
  )

  return data
}
