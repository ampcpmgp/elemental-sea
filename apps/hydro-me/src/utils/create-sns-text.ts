import { addUrlInTexts } from "./add-url-in-texts";
import { splitEmojiText } from "./split-emoji-text";
import { textsToSnsText } from "./texts-to-sns-text";

export function createSnsText(message: string, url: string) {
	let texts = splitEmojiText(message);
	texts = addUrlInTexts(texts, url);
	const snsText = textsToSnsText(texts);

	return snsText;
}
