export function refine(summary: string, maxChars: number) {
	const maxLines = 4;
	const lineLimit = Math.floor(maxChars / maxLines);

	return `
以下本文の要約を

\`\`\`txt
${summary}
\`\`\`

起承転結を意識して${maxLines}行に分け、各行${lineLimit}文字以内に収めるように要約してください。

また、以下を意識して作成してください。
・具体的な数値データは省略しないでください。
・淡々と事実を伝えるようにしてください。
・頭字語は省略せず、フルネームで書いてください。

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
