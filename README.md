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
### Разделение
Использовал несколько вхождений для сборки вебпака - мобильную версию, и десктопную.
У обоих версий один и тот же конфиг вебпака, и одна и та же папка для выхода, из различий:
- Разные названия
    - DESKTOP
        bundle@desktop.js
    - MOBILE
        bundle@mobile.js
- Разные входы
    - DESKTOP
        src/components/desktop/index.tsx
    - MOBILE
        sec/components/mobile/indes.tsx
В результате собрке, мы получаем две различные версии, но они обе наследуются от потомков из папки src/components/common. Для упрощения, использовал @bem-react/di.
### Серверная часть
Для него выделен отдельный конфиг (точнее сборка), т.к. к примеру style-loader сервер не поддерживает (по понятным причинам), или стандартный css-loader также не дружит с сервром, и пришлось погуглить - нашлось решение вида css-loader -> css-loader/locals. Для роутинга использовал <Switch><Route /></ Switch>.
### Библиотеки
#### DI
Использовал для того чтобы можно было танцевать между версиями.
#### Core
Для разделения подблока на части - в компоненте Event до этого был некий EventDataBlock, который включал в себя большую цепочку ищ if {} else if {} else {}, но теперь, этот блок использует compose, для того чтобы выбрать нужный элемент этого блока.
#### Classname
* cn
Использовал для того чтобы было удобно выставить классы
* classnames
Использовал для того чтобы делать удобные миксы между двумя блоками
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
