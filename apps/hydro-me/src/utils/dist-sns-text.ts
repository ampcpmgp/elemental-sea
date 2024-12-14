import fs from "node:fs";
import path from "node:path";

export function distSnsText(snsText: string) {
	// ファイルを dist/ directory に出力する
	const dist = path.resolve(__dirname, "../../dist");
	const filename = path.resolve(dist, "sns.txt");

	if (!fs.existsSync(dist)) {
		fs.mkdirSync(dist);
	}

	fs.writeFileSync(filename, snsText);
	console.info(`Output to ${filename}`);
}
