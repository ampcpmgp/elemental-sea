export function refine(summary: string, limit = 4, lineLimit = 40) {
	return `
以下本文の要約を

\`\`\`txt
${summary}
\`\`\`

起承転結を意識して4行に分け、各行60文字以内に収めるように要約してください。

最終出力は必ず、上記テンプレートから「\`\`\`を除いたもの」を出力してください。
`.trim();
}
