import { JSDOM } from "jsdom";
import { afterEach, describe } from "vitest";
import { SELECTOR } from "./const/selector";
import { P, match } from "ts-pattern";

export async function crawl(urlStr: string) {
	const url = new URL(urlStr);

	const siteName = match(url.hostname)
		.with("www.hydrogeninsight.com", () => "hydrogen_insight" as const)
		.with("www.h2-view.com", () => "h2_view" as const)
		.with(P.string, () => {
			throw new Error("Not implemented");
		})
		.exhaustive();

	const response = await fetch(url.href);

	if (!response.ok) {
		throw new Error(`Failed to fetch ${url.href}`);
	}

	const html = await response.text();
	const dom = new JSDOM(html);
	const document = dom.window.document;

	const selector = SELECTOR[siteName];

	const title = document.querySelector("title")?.textContent ?? "";
	const $article = document.querySelectorAll(selector);

	const article = Array.from($article)
		.map((el) => el.textContent)
		.join("\n");

	if (!title || !article) {
		throw new Error("Failed to fetch title or article");
	}

	return { title, article };
}

if (import.meta.vitest) {
	const { it, expect, vi } = import.meta.vitest;

	afterEach(() => {
		vi.restoreAllMocks();
	});

	describe("crawl", () => {
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
			).rejects.toThrowError(
				"Failed to fetch https://www.hydrogeninsight.com/",
			);
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
}
