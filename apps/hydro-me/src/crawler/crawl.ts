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
