// adapted from https://github.com/yisibl/num2fraction/blob/6aadbe73f3b983155dc105ae1231903dac6bfab4/index.js

function almostEqual(a: number, b: number) {
	return Math.abs(a - b) <= 9.5367432e-7;
}

function greatestCommonDenominator(a: number, b: number) {
	if (almostEqual(b, 0)) return a;

	return greatestCommonDenominator(b, a % b);
}

function findPrecision(n: number) {
	let e = 1;

	while (!almostEqual(Math.round(n * e) / e, n)) {
		e *= 10;
	}

	return e;
}

const acceptableDenominators = [2, 3, 4, 5, 8, 16];

export function toFraction(num: number): string {
	if (num === Infinity) return "Infinity";

	if (num === 0) return "0";

	const precision = findPrecision(num);
	const number = num * precision;
	const gcd = Math.abs(greatestCommonDenominator(number, precision));

	const numerator = number / gcd;

	const denominator = precision / gcd;

	if (!acceptableDenominators.includes(denominator)) {
		const formatter = new Intl.NumberFormat("en-us", {
			maximumFractionDigits: 2,
		});

		return formatter.format(num);
	}

	if (numerator > denominator) {
		const modulo = numerator % denominator;
		const remainder = Math.floor(numerator / denominator);

		return `${Math.round(remainder)} ${modulo}/${Math.round(denominator)}`;
	}

	return `${Math.round(numerator)}/${Math.round(denominator)}`;
}
