export function summary(news: string) {
	return `
以下のニュースを、客観的かつ前向きな表現で、日本語で箇条書きでまとめてください。
出力は結果のみを表示してください。

\`\`\`
${news}
\`\`\`
`.trim();
}
// gemini PRO API
