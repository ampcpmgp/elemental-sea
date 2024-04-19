import { generator } from "./generator";
import { summary } from "./generator/summary/main";

start();

async function start() {
	const summary = await generator.summary(
		`
NYK is among a growing list of shipping companies that are investing in ammonia as a fuel of the future. Ammonia has no carbon in its molecule, and can be produced from green hydrogen and a renewables-powered Haber-Bosch process that combines the H2 with nitrogen from the air — thus creating a green fuel with a higher energy density by volume than compressed or liquefied hydrogen.

But ammonia poses a challenge: it is a highly toxic substance that has yet to be deployed as a fuel in shipping.
`.trim(),
	);

	console.log("🚀 summary\n", summary);

	const refined = await generator.refine(summary, 4);

	console.log("🚀 refined\n", refined);
}
