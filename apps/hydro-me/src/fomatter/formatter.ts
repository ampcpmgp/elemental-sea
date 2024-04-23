export class Formatter {
	private _rawText: string;
	private _text = "";
	private _lines: string[] = [];

	constructor(rawText: string) {
		this._rawText = rawText;
	}

	splitTextByEmoji() {
		/**
		 * emoji detection
		 * show more link: https://stackoverflow.com/questions/18862256/how-to-detect-emoji-using-javascript
		 */
		const emojiPattern = new RegExp(/(\p{RGI_Emoji}+)/, "gv");
		this._lines = this.text
			.replace(emojiPattern, "\n$1")
			.split("\n")
			.filter(Boolean);

		return this;
	}

	appendUrl(url: string) {
		this._lines.splice(1, 0, url);

		return this;
	}

	x() {
		return this.text;
	}

	bsky() {
		return this.text;
	}

	get text() {
		return this._text;
	}

	get rawText() {
		return this._rawText;
	}

	get lines() {
		return this._lines;
	}

	set text(value: string) {
		this._text = value;
	}

	set rawText(value: string) {
		this._rawText = value;
	}

	set lines(value: string[]) {
		this._lines = value;
	}
}
