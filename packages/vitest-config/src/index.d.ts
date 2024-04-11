import type { InlineConfig } from "vitest";

declare module "vitest-config" {
	export const baseTestConfig: InlineConfig;
}
