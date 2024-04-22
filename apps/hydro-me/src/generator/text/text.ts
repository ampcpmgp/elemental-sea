import { match } from "ts-pattern";
import { isString } from "../../utils/is-string";
import type { OpenAIModelName, OpenAIModelOption } from "./types";
import { OpenAI } from "@langchain/openai";

type Args = [OpenAIModelName, OpenAIModelOption];

export async function text(prompt: string, ...args: Args) {
	const [modelName, option] = args;

	const model = match(modelName)
		.with(
			"gpt-3.5-turbo-instruct",
			(model) =>
				// API references: https://js.langchain.com/docs/integrations/llms/openai
				new OpenAI({
					model,
					...option,
				}),
		)
		.exhaustive();

	const text = await model.invoke(prompt.trim());

	isString(text);

	console.info(`🚀🚀🚀 generated text (${modelName}) 🚀🚀🚀`);
	console.info(text);
	console.info(text.length);
	console.info();

	return text;
}
