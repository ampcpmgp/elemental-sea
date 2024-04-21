export function outputMultiLines(summary: string, maxChars: number) {
	return `
以下の要約を、箇条書きを保ったまま、フレンドリーに、ナチュラルに、主観はほどほどに、主語を入れつつ、優しい口調で言い換えてもらえますか？

また、以下を意識して作成してください。
・頭字語は広く認知している言葉でない限り、初めて出てきたときはフルネームで書いてください。それ以降は省略してください。
・地名や会社名を出来る限り２度繰り返さないようにしてください。
・「！」を使って親近感を高めてください。ただし、使いすぎると逆に親近感が薄れるので注意してください。自信が無ければ、最大１つまでにしてください！
・その行に合う絵文字を文頭に入れてください。そして、行ごとの語尾は常に別なものを使ってください。

全ての文字数の合計は、必ず${maxChars}文字以内にしてください！！

以下のテンプレートを参考に。

\`\`\`
内容内容内容内容内容内容 絵文字

内容内容内容内容内容内容 絵文字

内容内容内容内容内容内容 絵文字
\`\`\`

最終出力は必ず、上記テンプレートから「\`\`\`を除いたもの」を出力してください。

\`\`\`
${summary}
\`\`\`
`.trim();
}
