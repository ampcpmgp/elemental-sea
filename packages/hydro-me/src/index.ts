import { Generator } from "./generator";
import { Prompt } from "./prompt";

start();

async function start() {
	const summaryPrompt = Prompt.summary(`
	`);
	const summary = await Generator.text(summaryPrompt, "gpt-4-turbo", {
		openai: {
			temperature: 0,
		},
	});

	console.log("\n\n🚀 summary 🚀\n\n", summary);

	// const refined = await Generator.refine(summary, 4);

	// console.log("\n\n🚀 refined 🚀\n\n", refined);

	// const toned = await Generator.changeTone(refined);

	// console.log("\n\n🚀 toned 🚀\n\n", toned);

	// const output = await Generator.addEmoji(toned);

	// console.log("\n\n🚀 output 🚀\n\n", output);
}
