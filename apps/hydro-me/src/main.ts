import { crawl } from "./crawler/crawl";
import { Generator } from "./generator";
import { Prompt } from "./prompt";
import assert from "node:assert";
import { createSnsText } from "./utils/create-sns-text";
import { distSnsText } from "./utils/dist-sns-text";

start();

async function start() {
	let prompt: string;
	let summary: string;

	const url = Bun.env.CRAWLER_URL;
	assert(url, "CRAWLER_URL is required");

	const { article } = await crawl(url);
	prompt = Prompt.summary(article);

	summary = await Generator.chat(prompt, "gpt-4o-2024-08-06", {
		temperature: 0,
	});

	prompt = Prompt.refine(summary, 360);
	summary = await Generator.chat(prompt, "gpt-4o-2024-08-06", {
		temperature: 0,
	});

	prompt = Prompt.ChangeTone.outputSingleLine(summary, 360);
	const result1 = await Generator.chat(prompt, "gpt-4-turbo-2024-04-09", {
		temperature: 0,
	});

	prompt = Prompt.ChangeTone.outputSingleLine(summary, 240);
	const result2 = await Generator.chat(prompt, "gpt-4-turbo-2024-04-09", {
		temperature: 0,
	});

	prompt = Prompt.ChangeTone.outputSingleLine(summary, 120);
	const result3 = await Generator.chat(prompt, "gpt-4-turbo-2024-04-09", {
		temperature: 0,
	});

	distSnsText(
		`${createSnsText(result1, url)}\n\n---------\n\n${createSnsText(result2, url)}\n\n---------\n\n${createSnsText(result3, url)}`,
	);

	console.info(url);
}
