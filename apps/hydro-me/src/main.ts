import { ChatIflytekXinghuo } from "langchain/chat_models/iflytek_xinghuo";
import { crawl } from "./crawler/crawl";
import { Generator } from "./generator";
import { Prompt } from "./prompt";
import assert from "node:assert";
import { Formatter } from "./fomatter/formatter";

start();

async function start() {
	let prompt: string;
	let summary: string;

	const url = Bun.env.CRAWLER_URL;
	assert(url, "CRAWLER_URL is required");

	const { article } = await crawl(url);
	prompt = Prompt.summary(article);

	summary = await Generator.chat(prompt, "gemini-1.0-pro", {
		temperature: 0,
	});

	prompt = Prompt.refine(summary, 240);
	summary = await Generator.chat(prompt, "gemini-1.0-pro", {
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

	console.info(url);
}
