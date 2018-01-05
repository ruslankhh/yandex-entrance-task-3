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

### 2. Должно открываться GraphQL IDE - http://localhost:3000/graphql/

#### Сообщение об ошибке

При переходе по адресу http://localhost:3000/graphql/:

```
Cannot GET /graphql
```

#### Описание решения

Опечатка в веб-адресе, передаваемом роутеру — вместо `'/graphql'` написано `'/graphgl'`.

- https://github.com/ruslankhh/entrance-task-1/blob/a0c0edd468af5817071a87a8727318b5f321f824/index.js#L14

Таким образом, для исправления данной ошибки мы должны передать роутеру правильный адрес `'/graphql'`.

### 3. Все запросы на получение или изменения данных через graphql должны работать корректно.

#### Сообщения об ошибке или некорректный вывод данных и описания решений

1. При передаче запроса в GraphQL IDE со следующими параметрами:

    ```graphql
    query users {
      users {
        id
        login
        homeFloor
        avatarUrl
      }
    }
    ```

    Выдаётся следующее сообщение:

    ```
    "Cannot return null for non-nullable field User.avatarUrl."
    ```

    <details>

    ```json
    {
      "errors": [
        {
          "message": "Cannot return null for non-nullable field User.avatarUrl.",
          "locations": [
            {
              "line": 6,
              "column": 5
            }
          ],
          "path": [
            "users",
            3,
            "avatarUrl"
          ]
        }
      ],
      "data": {
        "users": [
          {
            "id": "1",
            "login": "veged",
            "homeFloor": 0,
            "avatarUrl": "https://avatars3.githubusercontent.com/u/15365?s=460&v=4"
          },
          {
            "id": "2",
            "login": "alt-j",
            "homeFloor": 3,
            "avatarUrl": "https://avatars1.githubusercontent.com/u/3763844?s=400&v=4"
          },
          {
            "id": "3",
            "login": "yeti-or",
            "homeFloor": 2,
            "avatarUrl": "https://avatars0.githubusercontent.com/u/1813468?s=460&v=4"
          },
          null
        ]
      }
    }
    ```

    </details>

    **Описание решения**:

    В инпуте `UserInput` нехватает параметра `avatarUrl`. Для решения проблемы, добавим этот параметр.

    - https://github.com/ruslankhh/entrance-task-1/blob/a0c0edd468af5817071a87a8727318b5f321f824/graphql/typeDefs.js#L11

2. При передаче запроса в GraphQL IDE со следующими параметрами:

    ```graphql
    query event ($id: ID!) {
      event (id: $id) {
        id
        title
        dateStart
        dateEnd
        users {
          id
        }
        room {
          id
        }
      }
    }
    ```

    <details>

    ```json
    {
      "id": 1
    }
    ```

    </details>

    Выдаётся следующее сообщение:

    ```
    "users": null,
    "room": null
    ```

    <details>

    ```json
    {
      "data": {
        "event": {
          "id": "1",
          "title": "ШРИ 2018 - начало",
          "dateStart": "2017-12-13T19:12:36.981Z",
          "dateEnd": "2017-12-13T20:12:36.981Z",
          "users": null,
          "room": null
        }
      }
    }
    ```

    </details>

    **Описание решения**:

    Методы `users` и `room` класса `Event` ничего не возвращают. Для решения проблемы, добавим возрат данных в этих методах.

    - https://github.com/ruslankhh/entrance-task-1/blob/a0c0edd468af5817071a87a8727318b5f321f824/graphql/resolvers/index.js#L14
    - https://github.com/ruslankhh/entrance-task-1/blob/a0c0edd468af5817071a87a8727318b5f321f824/graphql/resolvers/index.js#L17

3. При передаче запроса в GraphQL IDE со следующими параметрами:

    ```graphql
    query events {
      events {
        id
        title
        dateStart
        dateEnd
        users {
          id
        }
        room {
          id
        }
      }
    }
    ```

    Выдаётся следующее сообщение:

    ```
    "argumets is not defined"
    ```

    <details>

    ```json
    {
      "errors": [
        {
          "message": "argumets is not defined",
          "locations": [
            {
              "line": 2,
              "column": 3
            }
          ],
          "path": [
            "events"
          ]
        }
      ],
      "data": {
        "events": null
      }
    }
    ```

    </details>

    **Описание решения**:

    Статический метод `findAll` класса `Model` принимает в качестве аргументов только один объект `options`. А мы, при вызове метода `events`, вместо этого передаём туда псевдомассив `arguments`, который при этом является неопределённым. Для решения проблемы, будем передавать в качестве `options` пустой объект, как это делается в `users` и `rooms`.

    - https://github.com/ruslankhh/entrance-task-1/blob/a0c0edd468af5817071a87a8727318b5f321f824/graphql/resolvers/query.js#L8
    - https://github.com/sequelize/sequelize/blob/master/lib/model.js#L1496

4. При передаче запроса в GraphQL IDE со следующими параметрами:

    ```graphql
    query rooms {
      rooms {
        id
        title
        capacity
        floor
      }
    }
    ```

    Выдаётся неполный список комнат.

    <details>

    ```json
    {
      "data": {
        "rooms": [
          {
            "id": "2",
            "title": "Деньги",
            "capacity": 4,
            "floor": 2
          },
          {
            "id": "3",
            "title": "Карты",
            "capacity": 4,
            "floor": 2
          },
          {
            "id": "4",
            "title": "Ствола",
            "capacity": 2,
            "floor": 2
          },
          {
            "id": "5",
            "title": "14",
            "capacity": 6,
            "floor": 3
          }
        ]
      }
    }
    ```

    </details>

    **Описание решения**:

    Статический метод `findAll` класса `Model` принимает в качестве опций объект `{ offset: 1 }`, который задаёт смещение на 1. Для решения проблемы, нужно убрать эту опцию, вместо неё передавать пустой объект.

    - https://github.com/ruslankhh/entrance-task-1/blob/a0c0edd468af5817071a87a8727318b5f321f824/graphql/resolvers/query.js#L20

5. При передаче запроса в GraphQL IDE со следующими параметрами:

    ```graphql
    mutation createUser ($input: UserInput!) {
      createUser (input: $input) {
        id
        login
        homeFloor
        avatarUrl
      }
    }
    ```

    <details>

    ```json
    {
      "input": {
        "login": "ruslankhh",
        "homeFloor": 4
      }
    }
    ```

    </details>

    Выдаётся следующее сообщение:

    ```
    "Cannot return null for non-nullable field User.avatarUrl."
    ```

    <details>

    ```json
    {
      "errors": [
        {
          "message": "Cannot return null for non-nullable field User.avatarUrl.",
          "locations": [
            {
              "line": 6,
              "column": 5
            }
          ],
          "path": [
            "createUser",
            "avatarUrl"
          ]
        }
      ],
      "data": {
        "createUser": null
      }
    }
    ```

    </details>

    **Описание решения**: решено в п. 1.

6. При передаче запроса в GraphQL IDE со следующими параметрами:

    ```graphql
    mutation createUser ($input: UserInput!) {
      createUser (input: $input) {
        id
        login
        homeFloor
        avatarUrl
      }
    }
    ```

    <details>

    ```json
    {
      "input": {
        "login": "ruslankhh",
        "homeFloor": 4,
        "avatarUrl": "https://avatars0.githubusercontent.com/u/9850193?s=460&v=4"
      }
    }
    ```

    </details>

    Выдаётся следующее сообщение:

    ```
    "Variable \"$input\" got invalid value {\"login\":\"ruslankhh\",\"homeFloor\":4,\"avatarUrl\":\"https://avatars0.githubusercontent.com/u/9850193?s=460&v=4\"}.\nIn field \"avatarUrl\": Unknown field."
    ```

    <details>

    ```json
    {
      "errors": [
        {
          "message": "Variable \"$input\" got invalid value {\"login\":\"ruslankhh\",\"homeFloor\":4,\"avatarUrl\":\"https://avatars0.githubusercontent.com/u/9850193?s=460&v=4\"}.\nIn field \"avatarUrl\": Unknown field.",
          "locations": [
            {
              "line": 1,
              "column": 21
            }
          ]
        }
      ]
    }
    ```

    </details>

    **Описание решения**: решено в п. 1.

7. При передаче запроса в GraphQL IDE со следующими параметрами:

    ```graphql
    mutation updateUser ($input: UserInput!) {
      updateUser (id: 4, input: $input) {
        id
        login
        homeFloor
        avatarUrl
      }
    }
    ```

    <details>

    ```json
    {
      "input": {
        "login": "ruslankhh",
        "homeFloor": 4,
        "avatarUrl": "https://avatars0.githubusercontent.com/u/9850193?s=460&v=4"
      }
    }
    ```

    </details>

    Выдаётся следующее сообщение:

    ```
    "Variable \"$input\" got invalid value {\"login\":\"ruslankhh\",\"homeFloor\":4,\"avatarUrl\":\"https://avatars0.githubusercontent.com/u/9850193?s=460&v=4\"}.\nIn field \"avatarUrl\": Unknown field."
    ```

    <details>

    ```json
    {
      "errors": [
        {
          "message": "Variable \"$input\" got invalid value {\"login\":\"ruslankhh\",\"homeFloor\":4,\"avatarUrl\":\"https://avatars0.githubusercontent.com/u/9850193?s=460&v=4\"}.\nIn field \"avatarUrl\": Unknown field.",
          "locations": [
            {
              "line": 1,
              "column": 21
            }
          ]
        }
      ]
    }
    ```

    </details>

    **Описание решения**: решено в п. 1.

8. При передаче запроса в GraphQL IDE со следующими параметрами:

    ```graphql
    mutation removeUser ($id: ID!) {
      removeUser (id: $id) {
        id
        login
        homeFloor
        avatarUrl
      }
    }
    ```

    <details>

    ```json
    {
      "id": 4
    }
    ```

    </details>

    Выдаётся следующее сообщение:

    ```
    "Cannot return null for non-nullable field User.avatarUrl."
    ```

    <details>

    ```json
    {
      "errors": [
        {
          "message": "Cannot return null for non-nullable field User.avatarUrl.",
          "locations": [
            {
              "line": 6,
              "column": 5
            }
          ],
          "path": [
            "removeUser",
            "avatarUrl"
          ]
        }
      ],
      "data": {
        "removeUser": null
      }
    }
    ```

    </details>

    **Описание решения**: решено в п. 1.

9. При передаче запроса в GraphQL IDE со следующими параметрами:

    ```graphql
    mutation removeUser ($id: ID!) {
      removeUser (id: $id) {
        id
        login
        homeFloor
        avatarUrl
      }
    }
    ```

    <details>

    ```json
    {
      "id": 4
    }
    ```

    </details>

    Если элемента с таким `id` нет, выдаётся следующее сообщение:

    ```
    "Cannot read property 'destroy' of null"
    ```

    <details>

    ```json
    {
      "errors": [
        {
          "message": "Cannot read property 'destroy' of null",
          "locations": [
            {
              "line": 35,
              "column": 3
            }
          ],
          "path": [
            "removeUser"
          ]
        }
      ],
      "data": {
        "removeUser": null
      }
    }
    ```

    </details>

    **Описание решения**:

    При попытке удаления элемента, которого нет, возникает ошибка вызова метода `destroy` соответствующего класса. Для решения проблемы, добавим в метод `removeUser` проверку на наличие данного элемента.

    - https://github.com/ruslankhh/entrance-task-1/blob/a0c0edd468af5817071a87a8727318b5f321f824/graphql/resolvers/mutation.js#L18

10. При передаче запроса в GraphQL IDE со следующими параметрами:

    ```graphql
    mutation removeRoom ($id: ID!) {
      removeRoom (id: $id) {
        id
        title
        capacity
        floor
      }
    }
    ```

    <details>

    ```json
    {
      "id": 4
    }
    ```

    </details>

    Если элемента с таким `id` нет, выдаётся следующее сообщение:

    ```
    "Cannot read property 'destroy' of null"
    ```

    <details>

    ```json
    {
      "errors": [
        {
          "message": "Cannot read property 'destroy' of null",
          "locations": [
            {
              "line": 59,
              "column": 3
            }
          ],
          "path": [
            "removeRoom"
          ]
        }
      ],
      "data": {
        "removeRoom": null
      }
    }
    ```

    </details>

    **Описание решения**: аналогично п. 9.

    - https://github.com/ruslankhh/entrance-task-1/blob/a0c0edd468af5817071a87a8727318b5f321f824/graphql/resolvers/mutation.js#L35

11. При передаче запроса в GraphQL IDE со следующими параметрами:

    ```graphql
    mutation createEvent ($input: EventInput!, $usersIds: [ID], $roomId: ID! ) {
      createEvent (input: $input, usersIds: $usersIds, roomId: $roomId) {
        id
    		title
        dateStart
        dateEnd
        users {
          id
        }
        room {
          id
        }
      }
    }
    ```

    <details>

    ```json
    {
      "input": {
        "title": "Cool Party",
        "dateStart": "2017-12-13T19:12:36.981Z",
        "dateEnd": "2017-12-13T20:12:36.981Z"
      },
      "usersIds": [1],
      "roomId": 1
    }
    ```

    </details>

    Выдаётся следующее сообщение:

    ```
    "users": null,
    "room": null
    ```

    <details>

    ```json
    {
      "data": {
        "createEvent": {
          "id": "5",
          "title": "Cool Party",
          "dateStart": "2017-12-13T19:12:36.981Z",
          "dateEnd": "2017-12-13T20:12:36.981Z",
          "users": null,
          "room": null
        }
      }
    }
    ```

    </details>

    **Описание решения**: решено в п. 2.

12. При передаче запроса в GraphQL IDE со следующими параметрами:

    ```graphql
    mutation updateEvent ($id: ID!, $input: EventInput!) {
      updateEvent (id: $id, input: $input) {
        id
        title
        dateStart
        dateEnd
        users {
          id
        }
        room {
          id
        }
      }
    }
    ```

    <details>

    ```json
    {
      "id": 1,
      "input": {
        "title": "Cool Party",
        "dateStart": "2017-12-13T19:12:36.981Z",
        "dateEnd": "2017-12-13T20:12:36.981Z"
      }
    }
    ```

    </details>

    Выдаётся следующее сообщение:

    ```
    "users": null,
    "room": null
    ```

    <details>

    ```json
    {
      "data": {
        "updateEvent": {
          "id": "1",
          "title": "Cool Party",
          "dateStart": "2017-12-13T19:12:36.981Z",
          "dateEnd": "2017-12-13T20:12:36.981Z",
          "users": null,
          "room": null
        }
      }
    }
    ```

    </details>

    **Описание решения**: решено в п. 2.

13. При передаче запроса в GraphQL IDE со следующими параметрами:

    ```graphql
    mutation removeUserFromEvent ($id: ID!, $userId: ID!) {
      removeUserFromEvent (id: $id, userId: $userId) {
        id
        title
        dateStart
        dateEnd
        users {
          id
        }
        room {
          id
        }
      }
    }
    ```

    <details>

    ```json
    {
      "id": 1,
      "userId": 1
    }
    ```

    </details>

    Выдаётся следующее сообщение:

    ```
    "users": null,
    "room": null
    ```

    <details>

    ```json
    {
      "data": {
        "removeUserFromEvent": {
          "id": "1",
          "title": "Cool Party",
          "dateStart": "2017-12-13T19:12:36.981Z",
          "dateEnd": "2017-12-13T20:12:36.981Z",
          "users": null,
          "room": null
        }
      }
    }
    ```

    </details>

    **Описание решения**: решено в п. 2.

14. При передаче запроса в GraphQL IDE со следующими параметрами:

    ```graphql
    mutation addUserToEvent ($id: ID!, $userId: ID!) {
      addUserToEvent (id: $id, userId: $userId) {
        id
        title
        dateStart
        dateEnd
        users {
          id
        }
        room {
          id
        }
      }
    }
    ```

    <details>

    ```json
    {
      "id": 1,
      "userId": 1
    }
    ```

    </details>

    Выдаётся следующее сообщение:

    ```
    "addUserToEvent": null
    ```

    <details>

    ```json
    {
      "data": {
        "addUserToEvent": null
      }
    }
    ```

    </details>

    **Описание решения**:

    У нас нет метода `addUserToEvent` у класса `Mutation`, хотя мы его определили. Для решения проблемы, добавим этот метод по аналогии с методом `removeUserFromEvent`, но с учетом определённых нюансов. Нужна проверка на наличие `user` в этом `event`, в случае его отсутсвия, добавлять его и возвращать `event`, в обратном случае — только возвращать `event`.

    - https://github.com/ruslankhh/entrance-task-1/blob/a0c0edd468af5817071a87a8727318b5f321f824/graphql/resolvers/mutation.js#L56
    - https://github.com/ruslankhh/entrance-task-1/blob/a0c0edd468af5817071a87a8727318b5f321f824/graphql/typeDefs.js#L70

15. При передаче запроса в GraphQL IDE со следующими параметрами:

    ```graphql
    mutation changeEventRoom ($id: ID!, $roomId: ID!) {
      changeEventRoom (id: $id, roomId: $roomId) {
        id
        title
        dateStart
        dateEnd
        users {
          id
        }
        room {
          id
        }
      }
    }
    ```

    <details>

    ```json
    {
      "id": 1,
      "roomId": 1
    }
    ```

    </details>

    Выдаётся следующее сообщение:

    ```
    "changeEventRoom": null
    ```

    <details>

    ```json
    {
      "data": {
        "changeEventRoom": null
      }
    }
    ```

    </details>

    **Описание решения**:

    Эта проблема похожа на п. 14. Только у нас есть метод `changeEventRoom` у класса `Mutation`. Но он не возращает нам `event`, как должен. Для решения проблемы, добавим возрат `event` в этом методе, а в метод `setRoom` будем передавать не `id`, а `roomId`.

    - https://github.com/ruslankhh/entrance-task-1/blob/a0c0edd468af5817071a87a8727318b5f321f824/graphql/resolvers/mutation.js#L67

16. При передаче запроса в GraphQL IDE со следующими параметрами:

    ```graphql
    mutation removeEvent ($id: ID!) {
      removeEvent (id: $id) {
        id
        title
        dateStart
        dateEnd
        users {
          id
        }
        room {
          id
        }
      }
    }
    ```

    <details>

    ```json
    {
      "id": 1
    }
    ```

    </details>

    Выдаётся следующее сообщение:

    ```
    "users": null,
    "room": null
    ```

    <details>

    ```json
    {
      "data": {
        "removeEvent": {
          "id": "1",
          "title": "Cool Party",
          "dateStart": "2017-12-13T19:12:36.981Z",
          "dateEnd": "2017-12-13T20:12:36.981Z",
          "users": null,
          "room": null
        }
      }
    }
    ```

    </details>

    **Описание решения**: решено в п. 2.

17. При передаче запроса в GraphQL IDE со следующими параметрами:

    ```graphql
    mutation removeEvent ($id: ID!) {
      removeEvent (id: $id) {
        id
        title
        dateStart
        dateEnd
        users {
          id
        }
        room {
          id
        }
      }
    }
    ```

    <details>

    ```json
    {
      "id": 1
    }
    ```

    </details>

    Если элемента с таким `id` нет, выдаётся следующее сообщение:

    ```
    "Cannot read property 'destroy' of null"
    ```

    <details>

    ```json
    {
      "errors": [
        {
          "message": "Cannot read property 'destroy' of null",
          "locations": [
            {
              "line": 26,
              "column": 5
            }
          ],
          "path": [
            "removeEvent"
          ]
        }
      ],
      "data": {
        "removeEvent": null
      }
    }
    ```

    </details>

    **Описание решения**: аналогично п. 9.

    - https://github.com/ruslankhh/entrance-task-1/blob/a0c0edd468af5817071a87a8727318b5f321f824/graphql/resolvers/mutation.js#L73
