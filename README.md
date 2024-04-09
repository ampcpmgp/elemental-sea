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

## Generate package

```shell
bunx turbo gen workspace
```

## Install package

```shell
cd packages/<package-name>
bun add <package-name> # if dev package, use -d option
```
