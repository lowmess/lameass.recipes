// Not really smartypants. So far just replaces apostrophes

const smartypants = (str) => {
	const aposRe = /(\w)('){1}(\w)/g

	return str.replace(aposRe, '$1’$3')
}

export default smartypants
