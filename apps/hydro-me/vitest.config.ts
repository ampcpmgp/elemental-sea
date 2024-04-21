/// <reference types="./vitest-env-override.d.ts" />

import { defineConfig } from "vitest/config";
import { baseTestConfig } from "@elemental-sea/vitest-config";

export default defineConfig({
	test: baseTestConfig,
});
