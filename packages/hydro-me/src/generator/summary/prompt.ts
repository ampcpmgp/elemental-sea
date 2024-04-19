export function prompt(news: string) {
	return `
以下のニュースを、日本語に翻訳してくれますか？
また、客観的かつ前向きな表現で、箇条書きにまとめてください。
最終出力は必ず、箇条書きの結果のみを表示してください。

\`\`\`
${news}
\`\`\`
`.trim();
}
// gemini PRO API
