const sometimesNegative = (num: number) =>
	Math.random() > 0.5 ? num * -1 : num

type CustomProperties = {
	[key: string]: string
}

export const getCustomProperties = (): CustomProperties => ({
	'--displacement': `${sometimesNegative(Math.random()).toFixed(2)}rem`,
	'--rotation': `${sometimesNegative(Math.random() * 3).toFixed(2)}deg`,
})
