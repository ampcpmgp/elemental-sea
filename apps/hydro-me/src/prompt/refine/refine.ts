export function refine(summary: string, maxChars: number) {
	const maxLines = 4;
	const lineLimit = Math.floor(maxChars / maxLines);

	return `
以下本文の要約を

\`\`\`txt
${summary}
\`\`\`

起承転結を意識して${maxLines}行に分け、各行${lineLimit}文字以内に収めるように要約してください。

テンプレートは以下を利用してください。

\`\`\`txt
起 内容内容内容内容内容
承 内容内容内容内容内容
転 内容内容内容内容内容
結 内容内容内容内容内容
\`\`\`

最終出力は必ず、上記テンプレートから「\`\`\`を除いたもの」を出力してください。
`.trim();
}
