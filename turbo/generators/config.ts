import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
	plop.setGenerator("generate simple workspace", {
		description:
			"Create a new simple workspace in the monorepo with a package.json, tsconfig.json, and more.",
		prompts: [
			{
				type: "list",
				name: "type",
				message: "What type of workspace is this?",
				choices: ["apps", "packages"],
			},
			{
				type: "input",
				name: "name",
				message: "What is the name of the workspace?",
			},
		],
		actions: [
			{
				type: "add",
				path: "{{ turbo.paths.root }}/{{ type }}/{{ name }}/package.json",
				templateFile: "templates/package.hbs",
			},
			{
				type: "add",
				path: "{{ turbo.paths.root }}/{{ type }}/{{ name }}/README.md",
				templateFile: "templates/readme.hbs",
			},
			{
				type: "add",
				path: "{{ turbo.paths.root }}/{{ type }}/{{ name }}/tsconfig.json",
				templateFile: "templates/tsconfig.hbs",
			},
			{
				type: "add",
				path: "{{ turbo.paths.root }}/{{ type }}/{{ name }}/vitest.config.ts",
				templateFile: "templates/vitest-config.hbs",
			},
			{
				type: "add",
				path: "{{ turbo.paths.root }}/{{ type }}/{{ name }}/src/index.ts",
				templateFile: "templates/src/index.hbs",
			},
			{
				type: "add",
				path: "{{ turbo.paths.root }}/{{ type }}/{{ name }}/src/example.ts",
				templateFile: "templates/src/example.hbs",
			},
		],
	});
}
