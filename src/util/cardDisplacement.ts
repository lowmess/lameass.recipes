function sometimesNegative(num: number) {
	return Math.random() > 0.5 ? num * -1 : num;
}

export function getCardDisplacement(): Record<string, string> {
	return {
		displacement: `${sometimesNegative(Math.round(Math.random() * 16))}px`,
		rotation: `${sometimesNegative(Math.random() * 3).toFixed(2)}deg`,
	};
}
