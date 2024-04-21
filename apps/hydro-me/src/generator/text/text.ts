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
	| [AnthoropicModelName, AnthoropicModelOption]
	| [OpenAIModelName, OpenAIModelOption]
	| [GoogleModelName, GoogleModelOption];

export async function text(prompt: string, ...args: Args) {
	const [modelName, option] = args;

	const model = match(modelName)
		.with(
			"claude-3-haiku-20240307",
			"claude-3-sonnet-20240229",
			(modelName) =>
				new ChatAnthropic({
					model: modelName,
					...option,
				}),
		)
		.with(
			"gpt-4-turbo-2024-04-09",
			() => new ChatOpenAI({ model: "gpt-4-turbo-2024-04-09", ...option }),
		)
		.with(
			"gemini-1.0-pro",
			() =>
				// API references: https://api.js.langchain.com/classes/langchain_google_genai.ChatGoogleGenerativeAI.html
				new ChatGoogleGenerativeAI({
					model: "gemini-pro",
					...option,
				}),
		)
		.exhaustive();

	const res = await model.invoke(prompt.trim());
	const { content } = res;

	isString(content);

	console.info("🚀🚀🚀 generated text 🚀🚀🚀");
	console.info(content);
	console.info(content.length);
	console.info();

	return content;
}
