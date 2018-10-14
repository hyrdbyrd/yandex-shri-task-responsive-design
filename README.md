## Для запуска понадобиться
```
npm i
npm start
```
После, открыть ссылку [localhost:8000](http://localhost:8000/events)
## Версия Node.js
### v8.12.0
## Версия npm
### v6.4.1
## Роуты
* [Главная страничка, со всеми событиями](http://localhost:8000/events)
* [Страничка для задания "мультимедия"](http://localhost:8000/video)
* [Страничка, которая возвращает отфильстрованный JSON (type=info:critical)](http://localhost:8000/api/events?type=info:critical)
* [Страничка, которая возвращает время, с момента запуска сервера](http://localhost:8000/status)
## Выполненые дополнительные задания
* Сдлеать пагинацию: к примеру, по ссылке /events/1:5 - вы получите события с 1го по 5е
* Привязать к основной верстке
* Сделать api/events еще и в пост запросе
## Выбор инструментов
Для удобства работы, и разделения частей, использовал сборку webpack:
1. Pug - для разделения и шаблонизации кода.
1. PostCSS - для разделения, и удобства написания кода.
1. ESLint - для соблюдения стиля.
1. Babel - хоть мы и работаем в "вечно зеленых" браузерах, но перестраховаться не мешает.
## Почему Pug?
* Для разделения компонентов, удобнее всего использовать include pugа.
* Присутствует возможностей таких как: mixin, block, extends, include; и т.д.
* Привычка использования данной технологии ускоряет работу.
## PostCSS плагины
* postcss-import
* autoprefixer
* precss
* postcss-assets
* postcss-preset-env