import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("generate workspace", {
    description:
      "Create a new workspace in the monorepo with a README.md and package.json",
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
    ],
  });
}
