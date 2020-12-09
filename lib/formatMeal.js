import smartypants from './smartypants'
import mdToHTML from './markdown'

const formatMeal = (meal) => {
	const recipes = meal.recipes.map((recipe) => ({
		title: smartypants(recipe.title),
		...recipe,
	}))

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
		recipes,
		sections,
	}
}

export default formatMeal
