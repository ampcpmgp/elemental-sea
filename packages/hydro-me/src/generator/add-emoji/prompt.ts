export function prompt(summary: string) {
	return `
以下の箇条書きのテキストを１行ずつ、内容に最適な絵文字を一つのみ、先頭の「•」から置き換えてください！（🇩🇪 のような、文字っぽい絵文字は使わないでください！）
また、結果は何が何でも、箇条書きのみを出力してください。

\`\`\`
${summary}
\`\`\`
`.trim();
}
// claude 3 haiku
