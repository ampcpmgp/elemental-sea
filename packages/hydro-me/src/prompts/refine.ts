export function refine(summary: string) {
	return `
以下の要約を、客観的にかつ、ストーリー性を大事にしたうえで、３～４個の箇条書きにまとめてもらえますか？
結果は何がなんでも、箇条書きのみを出力してください。

\`\`\`
${summary}
\`\`\`
`.trim();
}
// gemini PRO API
