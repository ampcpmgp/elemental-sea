import { crawl } from "./crawler/crawl";
import { Generator } from "./generator";
import { Prompt } from "./prompt";
import assert from "node:assert";

start();

async function start() {
	let prompt: string;

	const url = Bun.env.CRAWLER_URL;
	assert(url, "CRAWLER_URL is required");

	const { article } = await crawl(url);
	prompt = Prompt.summary(article);

	const summary = await Generator.chat(prompt, "gemini-1.0-pro", {
		temperature: 0,
	});

	prompt = Prompt.refine(article);
	await Generator.chat(prompt, "gemini-1.0-pro", {
		temperature: 0,
	});

	prompt = Prompt.ChangeTone.outputMultiLines(summary, 240);

	await Generator.chat(prompt, "gpt-4-turbo-2024-04-09", {
		temperature: 0,
	});

	prompt = Prompt.ChangeTone.outputSingleLine(summary, 180);

	await Generator.chat(prompt, "gpt-4-turbo-2024-04-09", {
		temperature: 0,
	});
}