import { modelNames } from "./const";
import type { ModelName } from "./types";

export function assertModelName(
	modelName: string,
): asserts modelName is ModelName {
	const isExist = modelNames.some((name) => name === modelName);

	if (!isExist) {
		throw new Error(`Invalid model name: ${modelName}`);
	}
}
