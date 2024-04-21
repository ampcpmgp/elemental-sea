import { JSDOM } from "jsdom";
import { afterEach } from "vitest";
import { SELECTOR } from "./const/selector";
import { getSiteName } from "./utils/get-site-name";

export async function crawl(urlStr: string) {
	const url = new URL(urlStr);

	const response = await fetch(url.href);

	if (!response.ok) {
		throw new Error(`Failed to fetch ${url.href}`);
	}

	const html = await response.text();
	const dom = new JSDOM(html);
	const document = dom.window.document;
	const siteName = getSiteName(url.hostname);
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
