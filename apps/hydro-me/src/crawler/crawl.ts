import { P, match } from "ts-pattern";
import { JSDOM } from "jsdom";
import { afterEach, beforeEach } from "vitest";

export async function crawl(urlStr: string) {
	const url = new URL(urlStr);

	const response = await fetch(url.href);

	if (!response.ok) {
		throw new Error(`Failed to fetch ${url.href}`);
	}

	// match(url.hostname)
	// 	.with("www.hydrogeninsight.com", () => {})
	// 	.with("www.h2-view.com", () => {})
	// 	.with(P.string, () => {
	// 		throw new Error("Not implemented");
	// 	})
	// 	.exhaustive();

	const html = await response.text();
	const dom = new JSDOM(html);
	const document = dom.window.document;
}

if (import.meta.vitest) {
	const { it, expect, vi } = import.meta.vitest;

	afterEach(() => {
		vi.restoreAllMocks();
	});

	it("should throw error when 404 status code", async () => {
		vi.spyOn(global, "fetch").mockResolvedValue(
			new Response("<html></html>", { status: 500 }),
		);

		await expect(() =>
			crawl("https://www.hydrogeninsight.com"),
		).rejects.toThrowError("Failed to fetch https://www.hydrogeninsight.com/");
	});

	it("should fetch the page", async () => {
		const html = await import("./mocks/hydrogeninsight-com.html?raw");

		vi.spyOn(global, "fetch").mockResolvedValue(
			new Response(html.default, { status: 200 }),
		);

		await expect(
			crawl("https://www.hydrogeninsight.com/electrolysers/us-awards-about"),
		).resolves.not.toThrowError();
	});
}
