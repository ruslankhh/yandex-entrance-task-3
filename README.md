# Приложение для создания и редактирования информации о встречах сотрудников

Написано для Node.js 8 и использует библиотеки:
* express
* sequelize
* graphql

## Задание
Код содержит ошибки разной степени критичности. Некоторых из них стилистические, а некоторые даже не позволят вам запустить приложение. Вам необходимо найти и исправить их.

Пункты для самопроверки:
1. Приложение должно успешно запускаться
2. Должно открываться GraphQL IDE - http://localhost:3000/graphql/
3. Все запросы на получение или изменения данных через graphql должны работать корректно. Все возможные запросы можно посмотреть в вкладке Docs в GraphQL IDE или в схеме (typeDefs.js)
4. Не должно быть лишнего кода
5. Все должно быть в едином codestyle

## Запуск
```
npm i
npm run dev
```

Для сброса данных в базе:
```
npm run reset-db
```

## Выполнение задания

### 1. Приложение должно успешно запускаться

#### Сообщение об ошибке

```
Error: Dialect needs to be explicitly supplied as of v4.0.0
    at new Sequelize (/Users/ruslankhh/github/entrance-task-1/node_modules/sequelize/lib/sequelize.js:175:13)
    at Object.<anonymous> (/Users/ruslankhh/github/entrance-task-1/models/index.js:7:19)
    ...
```

#### Описание решения

При создании экземпляра класса `Sequelize`, согласно документации, нужно передавать в конструктор 1 (`options`) или 4 аргумента (`database`, `username`, `password`, `options`).

- http://docs.sequelizejs.com/manual/installation/usage.html#basic-usage
- https://github.com/sequelize/sequelize/blob/master/lib/sequelize.js#L104

В данном случае передается 3 аргумента, и в качестве 3-го аргумента передается не `password`, как ожидается, а — `options`.

- https://github.com/ruslankhh/entrance-task-1/blob/a0c0edd468af5817071a87a8727318b5f321f824/models/index.js#L7

Поэтому `options` передаётся некорректно. Для конструктора аргумент `options` остаётся равным `undefined`. Конструтор записывает в `this.options` значения по умолчанию, и опция `this.options.dialect` остаётся равной `null`.

- https://github.com/sequelize/sequelize/blob/master/lib/sequelize.js#L148

Далее идёт проверка на наличие опции `this.options.dialect`, которая и выдаёт нам ошибку.

- https://github.com/sequelize/sequelize/blob/master/lib/sequelize.js#L174

Таким образом, для исправления данной ошибки мы должны передавать в наш конструктор аргумент `password` 3-м по счету, а `options` — 4-м.
