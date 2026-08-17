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

export function isColor(color: string): color is Color {
	return colors.some((validColor) => validColor === color);
}
