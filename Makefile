.PHONY: install
install:
	cd core && npm i
	cd page1 && npm i

.PHONY: build
build:
	cd core && npm run build
	cd page1 && npm run build

.PHONY: serve
serve:
	cd core && npm run serve &
	cd page1 && npm run serve