import { ChatAnthropic } from "@langchain/anthropic";
import type { ModelName, Option } from "./types";
import { match } from "ts-pattern";
import { ChatOpenAI } from "@langchain/openai";
import { isString } from "../../utils/is-string";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

export async function text(
	prompt: string,
	modelName: ModelName,
	option?: Option,
) {
	const model = match(modelName)
		.with(
			"claude-3-haiku-20240307",
			"claude-3-sonnet-20240229",
			(modelName) =>
				new ChatAnthropic({
					model: modelName,
					...option?.claude,
				}),
		)
		.with(
			"gpt-4-turbo-2024-04-09",
			() =>
				new ChatOpenAI({ model: "gpt-4-turbo-2024-04-09", ...option?.openai }),
		)
		.with(
			"gemini-1.0-pro",
			() =>
				// API references: https://api.js.langchain.com/classes/langchain_google_genai.ChatGoogleGenerativeAI.html
				new ChatGoogleGenerativeAI({
					model: "gemini-pro",
					...option?.google,
				}),
		)
		.exhaustive();

	const res = await model.invoke(prompt.trim());
	const { content } = res;

	isString(content);

	return content;
}
