export const anthoropicModelNames = [
	"claude-3-haiku-20240307",
	"claude-3-sonnet-20240229",
] as const;

export const openaiModelNames = [
	"gpt-4-turbo-2024-04-09",
	"gpt-3.5-turbo-0125",
] as const;

export const googleModelNames = ["gemini-1.0-pro"] as const;

export const modelNames = [
	...anthoropicModelNames,
	...openaiModelNames,
	...googleModelNames,
] as const;
