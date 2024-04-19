import { ChatAnthropic } from "@langchain/anthropic";
import { isString } from "../../utils/is-string";
import { makePrompt } from "./make-prompt";

export async function addEmoji(message: string) {
	const model = new ChatAnthropic({
		temperature: 0.9,
		model: "claude-3-haiku-20240307",
		maxTokens: 1024,
	});

	const prompt = makePrompt(message);

	const res = await model.invoke(prompt);

	const { content } = res;

	isString(content);

	return content;
}
