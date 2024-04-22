export class Formatter {
	private text: string;

	constructor(text: string) {
		this.text = text;
	}

	appendUrl(url: string) {
		this.text = `${this.text}\n${url}`;

		return this;
	}

	lineSpace(num: number) {
		this.text = this.text.replace(/\n/g, "\n".repeat(num));

		return this;
	}

	str() {
		return this.text;
	}
}
