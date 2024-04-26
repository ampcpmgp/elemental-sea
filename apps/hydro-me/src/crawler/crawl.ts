import * as cheerio from "cheerio";
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
	const $ = cheerio.load(html);

	const selector = SELECTOR[siteName];

	const title = $("title")?.text() ?? "";
	const $article = $(selector);
	const article = $article.text();

	if (!title || !article) {
		throw new Error("Failed to fetch title or article");
	}

	return { title, article };
}
