export function pluralize(
	value: number,
	singular: string,
	plural: string = `${singular}s`,
): string {
	return value === 1 ? singular : plural;
}
