import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("generate package", {
    description:
      "Create a new package in the monorepo with a README.md and package.json",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the package?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "{{ turbo.paths.root }}/packages/{{ name }}/package.json",
        templateFile: "templates/package.hbs",
      },
      {
        type: "add",
        path: "{{ turbo.paths.root }}/packages/{{ name }}/README.md",
        templateFile: "templates/readme.hbs",
      },
    ],
  });
}
