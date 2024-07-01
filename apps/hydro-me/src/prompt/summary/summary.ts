export function summary(news: string) {
	return `
以下のニュースを、重要な情報は省かず、出来る限り長文で詳細に、日本語に翻訳をお願いします。
また、客観的かつ前向きな表現で、必ず起承転結の４段構成になるよう、箇条書きにまとめてください。

テンプレートは以下に従ってください。

[起] 詳しい内容詳しい内容詳しい内容
[承] 詳しい内容詳しい内容詳しい内容
[転] 詳しい内容詳しい内容詳しい内容
[結] 詳しい内容詳しい内容詳しい内容


また、以下を意識して作成してください。
・日本人名はアルファベットのまま出力してください。
・地名はカタカナで出力し、町より市、市より島といった、より大きな地名を優先して出力してください。
・単位は、日本語の単位を使ってください。

キーワードは以下の通りです。
グリーン水素 水素ステーション 天然水素 ...

文字列置換は以下の通りです。
キロワット -> KW
メガワット -> MW
H2 -> 水素

最終出力は必ず、上記テンプレートのみを出力してください。

\`\`\`
${news}
\`\`\`
`.trim();
}
