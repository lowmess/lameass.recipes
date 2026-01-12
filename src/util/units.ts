import { Unit } from "#types/unit";

import { pluralize } from "./grammar";
import { toFraction } from "./number";

export function getUnit(potentialUnit: string): Unit | false {
	switch (potentialUnit) {
		// actual units
		case Unit.Cup:
		case "cups":
			return Unit.Cup;

		case Unit.FluidOunce:
		case "fluid ounces":
		case "fl oz":
		case "fl ozs":
			return Unit.FluidOunce;

		case Unit.Gallon:
		case "gallons":
			return Unit.Gallon;

		case Unit.Gram:
		case "grams":
		case "g":
		case "gs":
			return Unit.Gram;

		case Unit.Milliliter:
		case "milliliters":
		case "ml":
		case "mls":
		case "mL":
		case "mLs":
			return Unit.Milliliter;

		case Unit.Ounce:
		case "ounces":
		case "oz":
		case "ozs":
			return Unit.Ounce;

		case Unit.Pint:
		case "pints":
			return Unit.Pint;

		case Unit.Pound:
		case "pounds":
		case "lb":
		case "lbs":
			return Unit.Pound;

		case Unit.Quart:
		case "quarts":
		case "qt":
		case "qts":
			return Unit.Quart;

		case Unit.Tablespoon:
		case "tablespoons":
		case "tbsp":
		case "tbsps":
			return Unit.Tablespoon;

		case Unit.Teaspoon:
		case "teaspoons":
		case "tsp":
		case "tsps":
			return Unit.Teaspoon;

		// unit-likes
		case Unit.Clove:
		case "cloves":
			return Unit.Clove;

		case Unit.Dash:
		case "dashes":
			return Unit.Dash;

		case Unit.Leaf:
		case "leafs":
			return Unit.Leaf;

		case Unit.Pinch:
		case "pinches":
			return Unit.Pinch;

		case Unit.Slice:
		case "slice":
			return Unit.Slice;

		default:
			return false;
	}
}

export function pluralizeUnit(amount: number, potentialUnit: string | Unit) {
	const unit = getUnit(potentialUnit);

	if (!unit) {
		return pluralize(amount, potentialUnit);
	}

	let singular;
	let plural;

	switch (unit) {
		// actual units
		case Unit.Cup:
			singular = Unit.Cup;
			plural = `${Unit.Cup}s`;
			break;

		case Unit.FluidOunce:
			singular = Unit.FluidOunce;
			plural = `${Unit.FluidOunce}s`;
			break;

		case Unit.Gallon:
			singular = Unit.Gallon;
			plural = `${Unit.Gallon}s`;
			break;

		case Unit.Gram:
			singular = Unit.Gram;
			plural = `${Unit.Gram}s`;
			break;

		case Unit.Milliliter:
			singular = Unit.Milliliter;
			plural = `${Unit.Milliliter}s`;
			break;

		case Unit.Ounce:
			singular = Unit.Ounce;
			plural = `${Unit.Ounce}s`;
			break;

		case Unit.Pint:
			singular = Unit.Pint;
			plural = `${Unit.Pint}s`;
			break;

		case Unit.Pound:
			singular = Unit.Pound;
			plural = `${Unit.Pound}s`;
			break;

		case Unit.Quart:
			singular = Unit.Quart;
			plural = `${Unit.Quart}s`;
			break;

		case Unit.Tablespoon:
			singular = Unit.Tablespoon;
			plural = `${Unit.Tablespoon}s`;
			break;

		case Unit.Teaspoon:
			singular = Unit.Teaspoon;
			plural = `${Unit.Teaspoon}s`;
			break;

		// unit-likes
		case Unit.Clove:
			singular = Unit.Clove;
			plural = `${Unit.Clove}s`;
			break;

		case Unit.Dash:
			singular = Unit.Dash;
			plural = `${Unit.Dash}es`;
			break;

		case Unit.Leaf:
			singular = Unit.Leaf;
			plural = `${Unit.Leaf}s`;
			break;

		case Unit.Pinch:
			singular = Unit.Pinch;
			plural = `${Unit.Pinch}es`;
			break;

		case Unit.Slice:
			singular = Unit.Slice;
			plural = `${Unit.Slice}s`;
			break;

		default:
			return unit satisfies never;
	}

	return pluralize(amount, singular, plural);
}

export function pluralizeAmountWithUnit(amount: number, unit?: Unit | false) {
	return `${toFraction(amount)} ${unit ? pluralizeUnit(amount, unit) : ""}`.trim();
}
