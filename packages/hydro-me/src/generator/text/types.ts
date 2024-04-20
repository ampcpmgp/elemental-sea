import type { AnthropicInput, ChatAnthropic } from "@langchain/anthropic";
import type { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import type { ChatOpenAI } from "@langchain/openai";

export type ModelName =
	// https://docs.anthropic.com/claude/docs/models-overview
	| "claude-3-haiku-20240307"
	| "claude-3-sonnet-20240229"
	// https://platform.openai.com/docs/models/gpt-4-turbo-and-gpt-4
	| "gpt-4-turbo-2024-04-09"
	// https://ai.google.dev/gemini-api/docs/models/gemini?hl=ja#model-versions
	| "gemini-1.0-pro";

export type Option = {
	claude?: ConstructorParameters<typeof ChatAnthropic>[0];
	openai?: ConstructorParameters<typeof ChatOpenAI>[0];
	google?: ConstructorParameters<typeof ChatGoogleGenerativeAI>[0];
};
