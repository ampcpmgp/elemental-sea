export function addEmoji(text: string) {
	return `
以下のテキストを１行ずつ、内容に最適な絵文字を、文字の先頭に入れてください！

\`\`\`
${text}
\`\`\`
`.trim();
}
