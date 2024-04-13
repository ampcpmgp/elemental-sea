// If possible, use `.ts`
// https://github.com/vitejs/vite/issues/5370#issuecomment-1193352917

/** @type {import("vitest").InlineConfig} */
export const baseTestConfig = {
	includeSource: ["src/**/*.ts"],

	poolOptions: {
		threads: {
			// https://github.com/vitest-dev/vitest/issues/1674
			...(process.env.CI && {
				minThreads: 4,
				maxThreads: 4,
			}),
		},
	},

	coverage: {
		reporter: ["json-summary", "json"],
		reportOnFailure: true,
	},
};
