export function outputSingleLine(summary: string, maxChars: number) {
	return `
以下の要約を、フレンドリーに、ナチュラルに、主観はほどほどに、主語を入れつつ、優しい口調で言い換えてもらえますか？
頭字語は広く認知している言葉でない限り、初めて出てきたときはフルネームで書いてください。それ以降は省略してください。
また、「！」を使って親近感を高めてください。ただし、使いすぎると逆に親近感が薄れるので注意してください。自信が無ければ、最大１つまでにしてください！
文章は起承転結が保たれていることが重要です。
さらに、文章の理解を手助けするため、文頭に適切な絵文字を入れてください。
全ての文字数の合計は、必ず${maxChars}文字以内に抑えてください。

最終出力は必ず、結果のみを出力してください！

\`\`\`
${summary}
\`\`\`
`.trim();
}
