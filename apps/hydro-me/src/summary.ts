import { Generator } from "./generator";
import { Prompt } from "./prompt";
import { readFile, exists } from "node:fs/promises";
import path from "node:path";

summary();

async function summary() {
	const filePath = path.join(__dirname, "../post.txt");

	const fileExists = await exists(filePath);

	if (!fileExists) {
		throw new Error(`${filePath} not found`);
	}

	const article = await readFile(filePath, { encoding: "utf-8" });

	let prompt: string;
	let summary: string;

	prompt = Prompt.summary(article);

	summary = await Generator.chat(prompt, "gpt-4-turbo-2024-04-09", {
		temperature: 0,
	});

	prompt = Prompt.refine(summary, 360);
	summary = await Generator.chat(prompt, "gpt-4-turbo-2024-04-09", {
		temperature: 0,
	});

	prompt = Prompt.ChangeTone.outputSingleLine(summary, 360);
	await Generator.chat(prompt, "gpt-4-turbo-2024-04-09", {
		temperature: 0,
	});

	prompt = Prompt.ChangeTone.outputSingleLine(summary, 240);
	await Generator.chat(prompt, "gpt-4-turbo-2024-04-09", {
		temperature: 0,
	});

	prompt = Prompt.ChangeTone.outputSingleLine(summary, 120);
	await Generator.chat(prompt, "gpt-4-turbo-2024-04-09", {
		temperature: 0,
	});
}
