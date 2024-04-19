export function prompt(summary: string) {
	return `
以下の要約を、箇条書きを保ったまま、「～～かも！」や「～～みたい」といった優しい語り口調に言い換えてもらえますか？
結果は何がなんでも、箇条書きのみを出力してください。

\`\`\`
${summary}
\`\`\`
`.trim();
}
// gpt-4 turbo
