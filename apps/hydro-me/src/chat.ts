import { input, select } from "@inquirer/prompts";
import { modelNames } from "./generator/chat/const";
import { Generator } from "./generator";
import { parseArgs } from "node:util";
import { assertModelName } from "./generator/chat/utils";

chat();

export async function chat() {
	const options = getOptions();

	const model = options.model ?? (await selectModel());
	const prompt = options.prompt ?? (await inputPrompt());

	assertModelName(model);

	Generator.chat(prompt, model);
}

function getOptions() {
	const { values } = parseArgs({
		args: Bun.argv.slice(2),
		options: {
			model: {
				type: "string",
				alias: "m",
				description: "Model name",
			},
			prompt: {
				type: "string",
				alias: "p",
				description: "Prompt message",
			},
		},
	});

	return values;
}

function selectModel() {
	return select({
		message: "Select a model",
		choices: modelNames.map((name) => ({ value: name })),
	});
}

function inputPrompt() {
	return input({
		message: "Input a prompt message",
	});
}
