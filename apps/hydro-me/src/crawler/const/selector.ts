import type { SiteName } from "../types/site-name";

export const SELECTOR: Record<SiteName, string> = {
	hydrogen_insight: "#dn-content > p",
	h2_view: ".article-content > p",
};
