import ts from "typescript";

start();

interface Model {
	name: string;
	// Add other properties of the model interface here
}

async function start() {
	const res = await fetch(
		`https://generativelanguage.googleapis.com/v1/models?key=${Bun.env.GOOGLE_API_KEY}`,
	);

	const json = await res.json();
	const models: Model[] = json.models;
	const names: string[] = models.map((model) => model.name);

	console.log(models);
	console.log(names);
}
