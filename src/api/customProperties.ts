const sometimesNegative = (num: number) =>
	Math.random() > 0.5 ? num * -1 : num

type CustomProperties = {
	[key: string]: string
}

export const getCustomProperties = (): CustomProperties => ({
	'--x-offset': `${sometimesNegative(Math.random())}rem`,
	'--rotate': `${sometimesNegative(Math.random() * 3)}deg`,
})
