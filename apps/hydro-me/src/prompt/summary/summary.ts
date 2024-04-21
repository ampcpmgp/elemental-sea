export function summary(news: string) {
	return `
以下のニュースを、日本語に翻訳してくれますか？
また、客観的かつ前向きな表現で、必ず起承転結の４段構成になるよう、箇条書きにまとめてください。

テンプレートは以下に従ってください。

[起] 詳しい内容詳しい内容詳しい内容
[承] 詳しい内容詳しい内容詳しい内容
[転] 詳しい内容詳しい内容詳しい内容
[結] 詳しい内容詳しい内容詳しい内容


また、以下を意識して作成してください。
・日本人名はアルファベットのまま出力してください。

キーワードは以下の通りです。
グリーン水素 水素ステーション ...


最終出力は必ず、上記テンプレートのみを出力してください。

\`\`\`
${news}
\`\`\`
`.trim();
}