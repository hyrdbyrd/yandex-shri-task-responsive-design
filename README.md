## Для запуска понадобиться
```
git submodule update --init --recursive
npm i
npm start
```
После, открыть ссылку [localhost:8000](http://localhost:8000/events)
## БЭМ
Выделил следующие компоненты:
* Header
* Menu
* Content
* Event
    - Data
        - Buttons
        - Image
        - Music
        - Stats
        - Temperature
* Footer
* Page
### Библиотеки
#### DI
Использовал для того чтобы можно было танцевать между версиями.
#### Classname
Использовал для того чтобы было удобно выставить классы
## Версия Node.js
### v8.12.0
## Версия npm
### v6.4.1
## PostCSS плагины
* postcss-import
* autoprefixer
* precss
* postcss-assets
* postcss-preset-env
* postcss-css-to-bem-css
