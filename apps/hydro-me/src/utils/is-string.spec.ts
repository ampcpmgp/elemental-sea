import { describe, expect, it } from "vitest";
import { isString } from "./is-string";

describe("isString", () => {
	it("should throw if not a string", () => {
		expect(() => isString(1)).toThrow("Not a string");
		expect(() => isString({})).toThrow("Not a string");
		expect(() => isString([])).toThrow("Not a string");
	});

	it("should not throw if a string", () => {
		expect(() => isString("")).not.toThrow();
		expect(() => isString("hello")).not.toThrow();
	});
});
