install:#Установка зависимостей
		npm ci

publish: #Установка publish
		npm publish --dry-run

gendiff:
	node bin/gendiff.js

lint: #Запуск npx eslint .
		npx eslint .