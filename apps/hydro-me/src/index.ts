import { Generator } from "./generator";
import { Prompt } from "./prompt";

start();

async function start() {
	const text = `

`;
	let prompt = "";

	prompt = Prompt.summary(text);

	const summary = await Generator.text(prompt, "gpt-4-turbo-2024-04-09", {
		openai: {
			temperature: 0,
		},
	});

	prompt = Prompt.ChangeTone.outputMultiLines(summary, 240);

	const toned = await Generator.text(prompt, "gpt-4-turbo-2024-04-09", {
		openai: {
			temperature: 0,
		},
	});

	prompt = Prompt.ChangeTone.outputSingleLine(summary, 240);

	const tonedSimple = await Generator.text(prompt, "gpt-4-turbo-2024-04-09", {
		openai: {
			temperature: 0,
		},
	});
}
