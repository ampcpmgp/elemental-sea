import { P, match } from "ts-pattern";
import type { SiteName } from "../types/site-name";

export function getSiteName(domain: string): SiteName {
	const name = match(domain)
		.with("www.hydrogeninsight.com", () => "hydrogen_insight" as const)
		.with("www.h2-view.com", () => "h2_view" as const)
		.with(P.string, () => {
			throw new Error("Not implemented");
		})
		.exhaustive();

	return name;
}

if (import.meta.vitest) {
	const { it, expect, describe } = import.meta.vitest;

	describe("getSiteName", () => {
		it("should return hydrogen_insight", () => {
			const url = "https://www.hydrogeninsight.com";
			expect(getSiteName(url)).toBe("hydrogen_insight");
		});

		it("should return h2_view", () => {
			const url = "https://www.h2-view.com";
			expect(getSiteName(url)).toBe("h2_view");
		});

		it("should throw error", () => {
			const url = "https://example.com";
			expect(() => getSiteName(url)).toThrowError("Not implemented");
		});
	});
}
