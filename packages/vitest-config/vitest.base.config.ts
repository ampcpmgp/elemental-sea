import type { InlineConfig } from "vitest";

export const testConfig: InlineConfig = {
	poolOptions: {
		threads: {
			// https://github.com/vitest-dev/vitest/issues/1674
			...(process.env.CI && {
				minThreads: 4,
				maxThreads: 4,
			}),
		},
	},
};
