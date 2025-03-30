function sometimesNegative(num: number) {
	return Math.random() > 0.5 ? num * -1 : num;
}

type DisplacementOptions = {
	/** Maximum vertical displacement in pixels. Will be a negative value 50% of the time. */
	maxVerticalOffset?: number;
	/** Maximum horizontal displacement in pixels. Will be a negative value 50% of the time. */
	maxHorizontalOffset?: number;
	/** Maximum rotation in degs. Will be a negative value 50% of the time. */
	maxRotation?: number;
};

export function getDisplacementValues({
	maxVerticalOffset = 16,
	maxHorizontalOffset = 16,
	maxRotation = 3,
}: DisplacementOptions): Record<string, string> {
	return {
		verticalOffset: `${sometimesNegative(Math.round(Math.random() * maxVerticalOffset))}px`,
		horizontalOffset: `${sometimesNegative(Math.round(Math.random() * maxHorizontalOffset))}px`,
		rotation: `${sometimesNegative(Math.random() * maxRotation).toFixed(2)}deg`,
	};
}
