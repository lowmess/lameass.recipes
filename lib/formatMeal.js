import smartypants from './smartypants'
import mdToHTML from './markdown'

const formatMeal = (meal) => {
	const recipes = meal.recipes.map((recipe) => ({
		_id: recipe._id,
		title: smartypants(recipe.title),
		slug: recipe.slug,
	}))

	const emojis = Array.from(
		new Set(meal.recipes.map((recipe) => recipe.category.emoji))
	)

	const tags = meal.recipes
		.flatMap((r) => r.tags)
		.filter((t) => t)
		.reduce((acc, cur) => {
			const newTags = [...acc]

			const exists = acc.find((tag) => tag.slug === cur.slug)

			if (!exists) newTags.push(cur)

			return newTags
		}, [])

	const sections = meal.sections
		? meal.sections.map((section) => {
				const steps = section.steps.map((step) =>
					mdToHTML(step, { inline: true, allowLineBreaks: true })
				)

				return {
					...section,
					title: smartypants(section.title),
					steps,
				}
		  })
		: []

	const description = meal.description ? mdToHTML(meal.description) : null

	return {
		...meal,
		title: smartypants(meal.title),
		description,
		emojis,
		tags,
		recipes,
		sections,
	}
}

export default formatMeal
