export function splitEmojiText(text: string) {
	const splitTexts = text.split(/(?=\p{Emoji_Presentation})/u);

	return splitTexts;
}
