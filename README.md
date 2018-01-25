# Приложение для создания и редактирования информации о встречах сотрудников

Написано для Node.js 8 и использует библиотеки:

- express
- sequelize
- graphql
- react
- apollo-client

## Задание

В первом задании вы подготовили бэкенд, во втором — вёрстку. Цель третьего задания — реализовать одностраничное приложение «Яндекс Переговорки», которое будет использовать все наработки из предыдущих заданий. Приложение должно обладать всей функциональностью, изображённой на макете из второго задания.

Необходимо реализовать следующие переходы между макетами:

- При клике по свободному «слоту» в списке переговорок происходит переход на форму создания встречи с заполненным временем проведения и названием переговорки; если пользователь меняет время, выбранная переговорка заменяется на блок рекомендаций — о нём ниже.
- При клике по кнопке «Создать встречу» также происходит переход на форму создания встречи, но без заполненных полей (блок рекомендаций отсутствует и появляется только после ввода времени проведения встречи).

Для блока рекомендаций необходимо реализовать функцию getRecommendation ([описание интерфейса](https://gist.github.com/alt-j/f4dea60bad6a8774d982bc6b52184a08)), которая будет подбирать подходящие переговорки для встречи, учитывая:

- количество участников и вместимость переговорок;
- близость переговорки ко всем участникам встречи (первыми в списке должны быть переговорки, для которых суммарное количество пройдённых всеми участниками этажей будет минимальным).

Если все подходящие переговорки заняты, необходимо проверить, возможно ли освободить какую-то из них: а) Может быть, можно перенести встречу из неё в другую переговорку (например, меньших размеров). б) Если переговорки заняты не на весь период времени, стоит попробовать освободить одну из них, перенеся встречи в другие подходящие переговорки. Например, есть встреча с 11:00 до 12:00 и есть две подходящие переговорки А (занята с 11:00 до 11:30) и B (занята c 11:30 до 12:00). В таком случае можно перенести получасовую встречу из A в B, чтобы освободить А, или перенести встречу из B в A, чтобы освободить B. Вариант выбираем так, чтобы суммарное количество пройдённых всеми участниками этажей было минимальным.

Если не удалось найти никаких вариантов, необходимо выбрать подходящие переговорки, которые освободятся раньше других.

Всевозможные сценарии обработки некорректных данных, введённых пользователем, и системных ошибок, не описанных во втором задании, мы предлагаем продумать самостоятельно и спроектировать в качестве необязательного задания.

Мы не ограничиваем вас в выборе технологий, фреймворков и библиотек. Пожалуйста, для каждого выбранного инструмента напишите небольшое обоснование — зачем он нужен в вашем проекте и почему именно он.

Мы будем оценивать реализацию функциональности, а также:

- оформление кода;
- архитектуру приложения;
- организованную вами инфраструктуру для разработки;
- наличие и качество тестов;
- performance.

## Запуск

```
npm i
npm run build
npm start
```

Для разработки (запускается параллельно):

```
npm run dev:server
```
```
npm run dev:start
```

Для сброса данных в базе:

```
npm run reset-db
```

## Выполнение задания

### 1. Инфраструктура

Решил начать разработку приложения сразу с установления связи с сервером.

В качестве генератора и сборщика приложения выбрал [Create React App](https://github.com/facebook/create-react-app). Хотя я и настроил свою инфраструктуру в предыдущем задании, но на это ушло слишком много времени, и в этом задании мне не хотелось тратить на это много времени. Так же этого решение связано с выбором React-а.

### 2. Архитектура

В качестве архитектуры использовал компонентый подход. В качетсве методологии — БЭМ.

#### Фреймворки и библиотеки

##### Интерфейсы

Для создания интерфейсов решил использовать [React](https://github.com/facebook/react). У меня не так много опыта использования этой библиотеки, и был соблазн написать всё на чистом JS, но времени остлось уже слишком мало для этого. А так же мне хотелось попробовать написать хотя бы одно приложение на React-е.

##### Общение с сервером

Для общения с сервером при помощи graphql решил использовать [Apollo client](https://github.com/apollographql/apollo-client). Так как я не особо знаком с graphql, то выбрал первую библиотеку, у которой наиболее подробная документация и есть интерграция с React-ом.
