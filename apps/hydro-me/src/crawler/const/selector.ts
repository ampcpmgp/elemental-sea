import type { SiteName } from "../types/site-name";

export const SELECTOR: Record<SiteName, string> = {
	hydrogen_insight: ".article-body > [data-io-article-url] > p",
	h2_view: ".article-content > p",
};
