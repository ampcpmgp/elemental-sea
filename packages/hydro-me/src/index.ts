import { generator } from "./generator";
import { summary } from "./generator/summary/main";

start();

async function start() {
	const summary = await generator.summary(
		`
`.trim(),
	);

	console.log("\n\n🚀 summary 🚀\n\n", summary);

	const refined = await generator.refine(summary, 4);

	console.log("\n\n🚀 refined 🚀\n\n", refined);

	const toned = await generator.changeTone(refined);

	console.log("\n\n🚀 toned 🚀\n\n", toned);

	const output = await generator.addEmoji(toned);

	console.log("\n\n🚀 output 🚀\n\n", output);
}
