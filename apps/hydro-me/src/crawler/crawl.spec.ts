import { afterEach, describe, expect, it, vi } from "vitest";
import { crawl } from "./crawl";

describe("crawl", () => {
	afterEach(() => {
		vi.restoreAllMocks();
	});

	it("should throw error when site name is not implemented", async () => {
		await expect(() => crawl("https://example.com")).rejects.toThrowError(
			"Not implemented",
		);
	});

	it("should throw error when 404 status code", async () => {
		vi.spyOn(global, "fetch").mockResolvedValue(
			new Response("<html></html>", { status: 500 }),
		);

		await expect(() =>
			crawl("https://www.hydrogeninsight.com"),
		).rejects.toThrowError("Failed to fetch https://www.hydrogeninsight.com/");
	});

	it("should throw error when failed to fetch title or article", async () => {
		vi.spyOn(global, "fetch").mockResolvedValue(
			new Response("<html></html>", { status: 200 }),
		);

		await expect(() =>
			crawl("https://www.hydrogeninsight.com"),
		).rejects.toThrowError("Failed to fetch title or article");
	});

	it("should return a title and article when crawl hydrogeninsight", async () => {
		const html = await import("./mocks/hydrogeninsight-com.html?raw");

		vi.spyOn(global, "fetch").mockResolvedValue(
			new Response(html.default, { status: 200 }),
		);

		await expect(
			crawl("https://www.hydrogeninsight.com/electrolysers/us-awards-about"),
		).resolves.toMatchObject({
			title:
				"US awards about $335m of investment tax credits for new hydrogen-equipment manufacturing facilities | Hydrogen news and intelligence",
			article: expect.any(String),
		});
	});

	it("should return a title and article when crawl h2-view", async () => {
		const html = await import("./mocks/h2-view.html?raw");

		vi.spyOn(global, "fetch").mockImplementation(
			async () => new Response(html.default, { status: 200 }),
		);

		await expect(
			crawl("https://www.h2-view.com/story/article/"),
		).resolves.toMatchObject({
			title:
				"Construction begins in Norway on two hydrogen-powered ferries | Mobility | H2 View",
			article: expect.any(String),
		});
	});
});
