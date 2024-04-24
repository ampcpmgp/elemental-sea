import emojiRegex from "emoji-regex";

export class Formatter {
	private _rawText: string;
	private _text = "";
	private _url = "";
	private _lines: string[] = [];

	constructor(rawText: string) {
		this._rawText = rawText;
	}

	splitTextByEmoji() {
		/**
		 * emoji detection
		 * currently not supported `new RegExp(/(\p{RGI_Emoji}+)/gv);`
		 * show more link: https://stackoverflow.com/questions/18862256/how-to-detect-emoji-using-javascript
		 *
		 * workaround: use emoji-regex package
		 */
		const regex = emojiRegex();
		const emojiPattern = new RegExp(`((${regex.source})+)`, "g");

		this.lines = this.rawText
			.replace(emojiPattern, "\n$1")
			.split("\n")
			.filter(Boolean);

		return this;
	}

	appendUrl() {
		this.lines.splice(1, 0, this.url);

		return this;
	}

	appendUrlToLastLine() {
		this.lines.push(this.url);

		return this;
	}

	generateMessage() {
		const message = this._lines.join("\n\n");

		return message;
	}

	x() {
		return this.splitTextByEmoji().appendUrl().generateMessage();
	}

	bsky() {
		return this.splitTextByEmoji().appendUrlToLastLine().generateMessage();
	}

	outputFiles() {
		const path = require("node:path").resolve(
			import.meta.dir,
			"../../",
			"post.txt",
		);

		Bun.write(path, this.x());
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

	get url() {
		return this._url;
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

	set url(value: string) {
		this._url = value;
	}
}
