import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { prompt } from "./prompt";

export async function summary(news: string) {
	// API references: https://api.js.langchain.com/classes/langchain_google_genai.ChatGoogleGenerativeAI.html
	const model = new ChatGoogleGenerativeAI({
		model: "gemini-pro",
		maxOutputTokens: 2048,
	});

	const summary = prompt(news);
	const res = await model.invoke(summary);

	const { content } = res;

	if (!content || Array.isArray(content)) {
		throw new Error("Failed to generate summary");
	}

	return content;
}
