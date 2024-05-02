# Elemental Sea (元素海)

開発中。

## Setup

```shell
bun install
```

## Run

```shell
bun run dev
```

## Run (specific package)

```shell
bun run type-check --filter=element
```

## Generate template workspace

```shell
bun gen

? Select generator to run   generate workspace: Create a new workspace in the monorepo with a README.md and package.json
? What type of workspace is this? packages
? What is the name of the workspace? vitest-config
```

## Generate blank package

```shell
bun gen workspace
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

## Other

```shell
# list all scripts
bun run
```
