import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { prompt } from "./prompt";

export async function refine(summary: string, limit: number) {
	// API references: https://api.js.langchain.com/classes/langchain_google_genai.ChatGoogleGenerativeAI.html
	const model = new ChatGoogleGenerativeAI({
		model: "gemini-pro",
		maxOutputTokens: 2048,
	});

	const refined = prompt(summary, limit);

	const res = await model.invoke(refined);

	const { content } = res;

	if (!content) {
		throw new Error("Failed to generate summary");
	}

	return content;
}
