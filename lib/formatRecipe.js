import smartypants from './smartypants'
import mdToHTML from './markdown'

const formatRecipe = (recipe) => {
	const equipment = recipe.equipment
		? recipe.equipment.map((item) => mdToHTML(item, { inline: true }))
		: []

	const ingredients = recipe.ingredients
		? recipe.ingredients.map((ingredient) =>
				mdToHTML(ingredient, { inline: true })
		  )
		: []

	const sections = recipe.sections
		? recipe.sections.map((section) => {
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

	const description = recipe.description ? mdToHTML(recipe.description) : null

	const notes = recipe.notes ? mdToHTML(recipe.notes) : null

	return {
		...recipe,
		title: smartypants(recipe.title),
		description,
		equipment,
		ingredients,
		sections,
		notes,
	}
}

export default formatRecipe
