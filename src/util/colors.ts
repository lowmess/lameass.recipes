export const colors = [
	"red",
	"pink",
	"violet",
	"blue",
	"cyan",
	"teal",
	"green",
	"yellow",
	"orange",
] as const;

export type Color = (typeof colors)[number];

export function isColor(color: string | null): color is Color {
	if (!color) return false;

	return colors.some((validColor) => validColor === color);
}
