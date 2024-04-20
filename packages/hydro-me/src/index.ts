import { Generator } from "./generator";
import { Prompt } from "./prompt";

start();

async function start() {
	const text = `

`;
	let prompt = "";

	prompt = Prompt.summary(text);

	const summary = await Generator.text(prompt, "gpt-4-turbo", {
		openai: {
			temperature: 0,
		},
	});

	console.log("🚀🚀🚀 summary 🚀🚀🚀");
	console.log(summary);
	console.log(summary.length);

	prompt = Prompt.changeTone(summary, 240);
	const toned = await Generator.text(prompt, "gpt-4-turbo", {
		openai: {
			temperature: 0,
		},
	});

	console.log("🚀🚀🚀 toned 🚀🚀🚀");
	console.log(toned);
	console.log(toned.length);

	prompt = Prompt.changeToneSimple(summary, 120);

	const tonedSimple = await Generator.text(prompt, "gpt-4-turbo", {
		openai: {
			temperature: 0,
		},
	});

	console.log("🚀🚀🚀 tonedSimple 🚀🚀🚀");
	console.log(tonedSimple);
	console.log(tonedSimple.length);
}
