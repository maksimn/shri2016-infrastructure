## ДЗ по инфраструктуре

[![Build Status](https://travis-ci.org/maksimn/shri2016-infrastructure.svg?branch=master)](https://travis-ci.org/maksimn/shri2016-infrastructure)

1) Создан репозиторий на github с кодом приложения.

2) Удалил из конфигурации eslint правило про переносы строк, т.к. сижу из под Windows, а другие могут использовать Unix стиль.

3) Логи: heroku logs содержит
    
	1. Сообщения об операциях в ходе запуска node.js сервера.
	
	2. Сведения о запросах, приходящих на сервер (запрос страницы, запросы ресурсов - картинок, стилей и др.).
	
	3. Логи самого приложения (например, результат вызова console.timeEnd('render')).