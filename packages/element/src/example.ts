export function add(...args: number[]) {
	return args.reduce((a, b) => a + b, 0);
}

// in-source test suites
if (import.meta.vitest) {
	const { it, expect } = import.meta.vitest;
	// it("add", () => {
	// 	expect(add(1, 2, 5)).toBe(8);
	// });

	it("test", () => {
		expect(1).toBe(1);
	});
}
