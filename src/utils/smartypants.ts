// Not really smartypants. Just a small subset of that functionality

const smartypants = (str: string): string => {
	// replace primes in contractions with apostrophes
	const aposRe = /(\w)[']{1}(\w)/g
	// replace '--' with em dash
	const emDashRe = /[-]{2}/g
	// replace hyphen between numbers with en dash
	const enDashRe = /(\d){1}[ ]*[-][ ]*(\d){1}/g

	return str
		.replace(aposRe, '$1’$2')
		.replace(emDashRe, '—')
		.replace(enDashRe, '$1–$2')
}

export default smartypants
