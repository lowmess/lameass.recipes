import type { Unit } from "./unit";

// for whatever reason, the `yields` field on recipes are not being typed?
// i've tried different names in case it's a reserved word conflict...
// this does not solve the issue.
export type Measurement = {
	amount: number;
	unit: Unit | "servings" | "each";
};
