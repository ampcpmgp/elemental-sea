export function isString(value: unknown): asserts value is string {
	if (typeof value !== "string") throw new Error("Not a string");
}

if (import.meta.vitest) {
	const { it, expect } = import.meta.vitest;

	it("should throw if not a string", () => {
		expect(() => isString(1)).toThrow("Not a string");
		expect(() => isString({})).toThrow("Not a string");
		expect(() => isString([])).toThrow("Not a string");
	});

	it("should not throw if a string", () => {
		expect(() => isString("")).not.toThrow();
		expect(() => isString("hello")).not.toThrow();
	});
}
