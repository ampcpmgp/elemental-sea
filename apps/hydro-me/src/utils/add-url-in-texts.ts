/**
 * URL を１行目の次に行に追加する
 */
export function addUrlInTexts(texts: string[], url: string) {
	const newTexts = [...texts];
	newTexts.splice(1, 0, url);

	return newTexts;
}
