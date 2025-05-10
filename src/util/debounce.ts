/**
 * Creates a debounced function that delays invoking the provided function until
 * at least ms milliseconds have elapsed since the last time it was invoked.
 *
 * @link https://decipher.dev/30-seconds-of-typescript/docs/debounce/
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export function debounce(fn: Function, ms = 300) {
	let timeoutId: ReturnType<typeof setTimeout>;

	return function (this: unknown, ...args: Array<unknown>) {
		clearTimeout(timeoutId);

		timeoutId = setTimeout(() => fn.apply(this, args), ms);
	};
}
