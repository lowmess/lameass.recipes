import remark from 'remark'
import html from 'remark-html'
import smartypants from './smartypants'

// Should probably do this in a remark plugin, but I don't wanna
const noteToSup = (str) => {
	const note = /[[](\d)+[\]]/g

	return str.replace(note, '<sup>$1</sup>')
}

const toInline = (str, allowLineBreaks = false) => {
	const wrappers = /^(<p>)|(<\/p>)$/g
	const breaks = /(<\/p>){1}[\s]*(<p>){1}/g

	return str
		.trim()
		.replace(wrappers, '')
		.replace(breaks, allowLineBreaks ? '<br /><br />' : ' ')
}

const mdToHTML = (string, options = {}) => {
	const md = remark()
		.use({ settings: { bullet: '+' } })
		.use(html)
		.processSync(string)
		.toString()

	if (!options.inline) return smartypants(noteToSup(md))

	return smartypants(toInline(noteToSup(md), options.allowLineBreaks))
}

export default mdToHTML
