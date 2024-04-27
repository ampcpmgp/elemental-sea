import { input, select } from "@inquirer/prompts";
import { modelNames } from "./generator/chat/const";
import { Generator } from "./generator";

chat();

export async function chat() {
	const model = await select({
		message: "Select a model",
		choices: modelNames.map((name) => ({ value: name })),
	});

	const message = await input({
		message: "Type a message",
	});

	Generator.chat(message, model);
}
