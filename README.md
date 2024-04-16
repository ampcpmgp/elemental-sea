# Elemental Sea (元素海)

開発中。

## Setup

```shell
bun install
```

## Run

```shell
bunx turbo run dev
```

## Run (specific package)

```shell
bunx turbo run type-check --filter=element
```

## Generate template workspace

```shell
bunx turbo gen

? Select generator to run   generate workspace: Create a new workspace in the monorepo with a README.md and package.json
? What type of workspace is this? packages
? What is the name of the workspace? vitest-config
```

## Generate blank package

```shell
bunx turbo gen workspace
```

## Install package

```shell
cd packages/<package-name>
bun add <package-name> # if dev package, use -d option
```

## Fix mismatched versions

```shell
bun run fix-mismatched-versions
```

## Publish package

```shell
# e.g.
cd pakcages/element
npm publish --access=public ./
```
