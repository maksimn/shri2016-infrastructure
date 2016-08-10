## ДЗ по инфраструктуре

[![Build Status](https://travis-ci.org/maksimn/shri2016-infrastructure.svg?branch=master)](https://travis-ci.org/maksimn/shri2016-infrastructure)
[![bitHound Overall Score](https://www.bithound.io/github/maksimn/shri2016-infrastructure/badges/score.svg)](https://www.bithound.io/github/maksimn/shri2016-infrastructure)


1) Создан репозиторий на github с кодом приложения.

2) Удалил из конфигурации eslint правило про переносы строк, т.к. сижу из под Windows, а другие могут использовать Unix стиль.

3) Логи: heroku logs содержит
    
	1. Сообщения об операциях в ходе запуска node.js сервера.
	
	2. Сведения о запросах, приходящих на сервер (запрос страницы, запросы ресурсов - картинок, стилей и др.).
	
	3. Логи самого приложения (например, результат вызова console.timeEnd('render')).

Конкретный вид логов довольно прост и здесь не приводится.
	
4) Т.к. на Node.js я пока не писал приложений, то добавил в проект маленькую часть кода от вступительного задания и тесты к нему с использованием Mocha. Сконфигурировал eslint и package.json для того, чтобы весь код проверялся и тесты прогонялись при npm test.

5) Добавлен bithound.

6) Добавлен uptimerobot. https://github.com/maksimn/shri2016-infrastructure/blob/master/uptimerobot.jpg 
Т.к. uptimerobot включен недавно, то пока записана только одна точка графика.