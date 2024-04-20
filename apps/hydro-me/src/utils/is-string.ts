export function isString(value: unknown): asserts value is string {
	if (typeof value !== "string") throw new Error("Not a string");
}
