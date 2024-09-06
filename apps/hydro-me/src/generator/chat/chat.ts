import { ChatAnthropic } from "@langchain/anthropic";
import type {
	AnthoropicModelName,
	AnthoropicModelOption,
	GoogleModelName,
	GoogleModelOption,
	OpenAIModelName,
	OpenAIModelOption,
} from "./types";
import { match } from "ts-pattern";
import { ChatOpenAI } from "@langchain/openai";
import { isString } from "../../utils/is-string";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

type Args =
	| [AnthoropicModelName]
	| [AnthoropicModelName, AnthoropicModelOption]
	| [OpenAIModelName]
	| [OpenAIModelName, OpenAIModelOption]
	| [GoogleModelName]
	| [GoogleModelName, GoogleModelOption];

export async function chat(prompt: string, ...args: Args) {
	const [modelName, option] = args;

	const model = match(modelName)
		.with(
			"claude-3-haiku-20240307",
			"claude-3-sonnet-20240229",
			(model) =>
				new ChatAnthropic({
					model,
					...option,
				}),
		)
		.with(
			"gpt-4o-2024-08-06",
			"gpt-4o-2024-05-13",
			"gpt-4-turbo-2024-04-09",
			(model) => new ChatOpenAI({ model, ...option }),
		)
		.with(
			"gpt-3.5-turbo-0125",
			(model) =>
				new ChatOpenAI({
					model,
					// half of the maxTokens
					maxTokens: 2048,
					...option,
				}),
		)
		.with(
			"gemini-1.0-pro",
			(model) =>
				// API references: https://api.js.langchain.com/classes/langchain_google_genai.ChatGoogleGenerativeAI.html
				new ChatGoogleGenerativeAI({
					model,
					...option,
				}),
		)
		.exhaustive();

	const res = await model.invoke(prompt.trim());
	const { content } = res;

	isString(content);

	console.info(`🚀🚀🚀 generated chat (${modelName}) 🚀🚀🚀`);
	console.info(content.length);
	console.info(content);
	console.info();

	return content;
}
