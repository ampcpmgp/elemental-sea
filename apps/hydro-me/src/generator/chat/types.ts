import type { ChatAnthropic } from "@langchain/anthropic";
import type { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import type { ChatOpenAI } from "@langchain/openai";
import type {
	anthoropicModelNames,
	googleModelNames,
	openaiModelNames,
} from "./const";

// https://docs.anthropic.com/claude/docs/models-overview
export type AnthoropicModelName = (typeof anthoropicModelNames)[number];

// https://platform.openai.com/docs/models/gpt-4-turbo-and-gpt-4
export type OpenAIModelName = (typeof openaiModelNames)[number];

// https://ai.google.dev/gemini-api/docs/models/gemini?hl=ja#model-versions
export type GoogleModelName = (typeof googleModelNames)[number];

export type AnthoropicModelOption = ConstructorParameters<
	typeof ChatAnthropic
>[0];

export type OpenAIModelOption = ConstructorParameters<typeof ChatOpenAI>[0];

export type GoogleModelOption = ConstructorParameters<
	typeof ChatGoogleGenerativeAI
>[0];
