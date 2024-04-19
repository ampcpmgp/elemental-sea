import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { makePrompt } from "./make-prompt";
import { isString } from "../../utils/is-string";

export async function summary(news: string) {
	// API references: https://api.js.langchain.com/classes/langchain_google_genai.ChatGoogleGenerativeAI.html
	const model = new ChatGoogleGenerativeAI({
		model: "gemini-pro",
		maxOutputTokens: 2048,
	});

	const prompt = makePrompt(news);
	const res = await model.invoke(prompt);

	const { content } = res;

	isString(content);

	return content;
}
