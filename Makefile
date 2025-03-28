install:#Установка зависимостей
		npm ci

publish: #Установка publish
		npm publish --dry-run

lint: #Запуск npx eslint .
		npx eslint .