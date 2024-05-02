import type { SiteName } from "../types/site-name";

export const SELECTOR: Record<SiteName, string> = {
	hydrogen_insight: "h1.title, .lead, #dn-content > p",
	h2_view: "h1, .article-content > p",
};
