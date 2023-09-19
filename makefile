dev:
	pnpm run dev;

build:
	pnpm run build;

deploy: build
	pnpm run deploy;

merge-data:
	node ./task/merge.mjs;

fetch-data:
	node ./task/fetch.mjs;
