install:#Установка зависимостей
		npm ci

publish: #Установка publish
		npm publish --dry-run

gendiff:
	node bin/gendiff.js

lint: #Запуск npx eslint .
		npx eslint .

test:
		npm test

test-coverage:
		npm test -- --coverage --coverageProvider=v8

publish:
		npx release-it

.PHONY: test