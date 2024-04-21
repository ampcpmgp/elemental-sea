import type { OpenAI } from "@langchain/openai";

// https://platform.openai.com/docs/models/overview
export type OpenAIModelName = "gpt-3.5-turbo-instruct";

export type OpenAIModelOption = ConstructorParameters<typeof OpenAI>[0];
