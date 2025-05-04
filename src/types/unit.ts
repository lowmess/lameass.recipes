export const Unit = Object.freeze({
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
});

export type Unit = (typeof Unit)[keyof typeof Unit];
