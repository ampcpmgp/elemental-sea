export function prompt(summary: string, limit: number) {
	const min = limit - 1;
	const max = limit;

	return `
以下の要約を、客観的にかつ、ストーリー性を大事にしたうえで、${min}~${max}個の箇条書きにまとめてもらえますか？
結果は何がなんでも、箇条書きのみを出力してください。

\`\`\`
${summary}
\`\`\`
`.trim();
}
// gemini PRO API
