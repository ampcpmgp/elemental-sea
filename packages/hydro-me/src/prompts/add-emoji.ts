export function addEmoji(text: string) {
	return `
以下のテキストを１行ずつ、内容に最適な絵文字を一つ、先頭の「•」を置き換えて入れてください！

\`\`\`
${text}
\`\`\`
`.trim();
}
