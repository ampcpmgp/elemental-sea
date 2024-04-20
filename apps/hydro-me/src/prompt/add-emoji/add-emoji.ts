export function addEmoji(summary: string) {
	return `
以下の箇条書きのテキストを１行ずつ、国名を除き、内容に最適な絵文字を一つ、先頭の「•」から置き換えてください！
結果は何が何でも、箇条書きのみを出力してください。

\`\`\`
${summary}
\`\`\`
`.trim();
}
