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

/** Get light theme hex colors for each color. Used for OG image generation */
export function getColorHex(color: Color): `#${string}` {
	switch (color) {
		case "red":
			return "#f94838" as const;

		case "pink":
			return "#fa3989" as const;

		case "violet":
			return "#ba5bfd" as const;

		case "blue":
			return "#3887f7" as const;

		case "cyan":
			return "#2497a0" as const;

		case "teal":
			return "#239b6a" as const;

		case "green":
			return "#249e2e" as const;

		case "yellow":
			return "#d7c30f" as const;

		case "orange":
			return "#d69231" as const;

		default:
			return color satisfies never;
	}
}
