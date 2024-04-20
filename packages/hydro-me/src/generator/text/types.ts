import type { AnthropicInput, ChatAnthropic } from "@langchain/anthropic";
import type { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import type { ChatOpenAI } from "@langchain/openai";

export type ModelName = "claude-3-haiku" | "gpt-4-turbo" | "gemini-pro";

export type Option = {
	claude?: ConstructorParameters<typeof ChatAnthropic>[0];
	openai?: ConstructorParameters<typeof ChatOpenAI>[0];
	google?: ConstructorParameters<typeof ChatGoogleGenerativeAI>[0];
};
