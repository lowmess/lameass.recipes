import type * as CSS from 'csstype'

declare module 'csstype' {
	export interface Properties extends CSS.Properties {
		[key: `--${string}`]: string | number
	}
}
