export const Unit = Object.freeze({
	// actual units
	Cup: "cup",
	FluidOunce: "fluid ounce",
	Gallon: "gallon",
	Gram: "gram",
	Milliliter: "milliliter",
	Ounce: "ounce",
	Pint: "pint",
	Pound: "pound",
	Quart: "quart",
	Tablespoon: "tablespoon",
	Teaspoon: "teaspoon",
	// other common unit-likes
	Clove: "clove",
	Dash: "dash",
	Leaf: "leaf",
	Pinch: "pinch",
	Slice: "slice",
});

export type Unit = (typeof Unit)[keyof typeof Unit];
