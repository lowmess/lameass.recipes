import { Unit } from "#types/unit";

export function getUnit(potentialUnit: string): Unit | false {
	switch (potentialUnit) {
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

		default:
			return false;
	}
}
