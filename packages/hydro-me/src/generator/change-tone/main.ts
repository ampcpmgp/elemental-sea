import { ChatOpenAI } from "@langchain/openai";
import { isString } from "../../utils/is-string";
import { makePrompt } from "./make-prompt";

export async function changeTone(message: string) {
	const chatModel = new ChatOpenAI({});
	const prompt = makePrompt(message);

	const res = await chatModel.invoke(prompt);

	const { content } = res;

	isString(content);

	return content;
}
