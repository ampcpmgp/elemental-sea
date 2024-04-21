import type { AnthropicInput, ChatAnthropic } from "@langchain/anthropic";
import type { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import type { ChatOpenAI } from "@langchain/openai";

// https://docs.anthropic.com/claude/docs/models-overview
export type AnthoropicModelName =
	| "claude-3-haiku-20240307"
	| "claude-3-sonnet-20240229";

// https://platform.openai.com/docs/models/gpt-4-turbo-and-gpt-4
export type OpenAIModelName = "gpt-4-turbo-2024-04-09";

// https://ai.google.dev/gemini-api/docs/models/gemini?hl=ja#model-versions
export type GoogleModelName = "gemini-1.0-pro";

export type AnthoropicModelOption = ConstructorParameters<
	typeof ChatAnthropic
>[0];

export type OpenAIModelOption = ConstructorParameters<typeof ChatOpenAI>[0];

export type GoogleModelOption = ConstructorParameters<
	typeof ChatGoogleGenerativeAI
>[0];
