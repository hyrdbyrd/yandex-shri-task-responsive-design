## Для запуска понадобиться
```
git submodule update --init --recursive
npm i
npm run build
npm start
```
После, открыть ссылку [localhost:8000](http://localhost:8000/events)
## Версия Node.js
### v8.12.0
## Версия npm
### v6.4.1
## Readyx
### INTERFACE
```ts
abstract class ReadyxStore {
    // Vars
    protected state: State;
    protected listeners: Listener[];
    protected reducer: (state: State, action?: Action) => any;

    // Functions
    abstract getState(): State;
    abstract dispatch(action: Action): void;
    abstract subscribe(listener: Listener): void;
}
```
### CLASS
```ts
class Readyx extends ReadyxStore {
    constructor(reducer: (state: State, action?: Action) => any, initialState?: State) {
        super();

        if (initialState) this.state = initialState;

        this.reducer = reducer.bind(this);
        this.listeners = [];
    }

    public getState(): State {
        return this.state;
    }

    private deepEqual(firstOne: State, secondOne: State): boolean {
        let isEqual: boolean = true;

        for (let key in firstOne) {
            if (typeof firstOne[key] === 'object') {
                isEqual = isEqual && this.deepEqual(firstOne[key], secondOne[key]);
            } else {
                if (firstOne[key] && secondOne[key]) isEqual = isEqual && firstOne[key] === secondOne[key];
                else isEqual = isEqual && firstOne === secondOne;
            }

            if (!isEqual) return false;
        }

        return isEqual;
    }

    public dispatch(action?: Action): void {
        const { reducer, deepEqual, state } = this;

        const newState = reducer(state, action);
        if (!deepEqual(newState, state)) {
        this.state = { ...newState };
        this.listeners.forEach((listener: Listener) => listener());
        }
    }

    public subscribe(listener: Listener): void {
        this.listeners.push(listener);
    }
}
```
### Суть
Сначала мы создаем сам экземпляр вида:
```ts
const newReadyxStorage: Readyx = new Readyx(
    // Reduces
    reducer: (state: State, action: Action) => any,
    // Initialize state
    state: State | any
);
```
После, можно назначить слушатель (то, что происходит после изменения состояние):
```ts
newReadyxStorage.subscribe(listener: Listener);
```
И после, вызывать последующие изменения состояний вида:
```ts
newReadyxStorage.dispatch(action: Action);
```
Вот и весь принцип.
## Роуты
* [Главная страничка, со всеми событиями](http://localhost:8000/events)
* [Страничка для задания "мультимедия"](http://localhost:8000/video)
* [Страничка, которая возвращает отфильстрованный JSON (type=info:critical)](http://localhost:8000/api/events?type=info:critical)
* [Страничка, которая возвращает время, с момента запуска сервера](http://localhost:8000/status)
## Выполненые дополнительные задания
* Сдлеать пагинацию: к примеру, по ссылке /events/1:5 - вы получите события с 1го по 5е
* Привязать к основной верстке
* Сделать api/events еще и в пост запросе
## Проблемы миграции с JavaScript на TypeScript
### Сборка
Т.к. до этого сборка была расчитана на чистый JS (ES6), то к примеру тот же eslint - не вписывался в сборку с TypeScript.
### Конфигурация
Много времени ушло на то, чтобы просто понять, что я хочу писать - настройка tslint, tsconfig и т.п. заняла довольно много времени.
### @types/*
Довольно много нового пришлось сверху установить, для того чтобы проект мог быть рабочим, такие пакеты как @types/cors, @types/express и @types/node, должны были быть установленны для работы уже существующего приложения.
### @types/express
Пришлось чутка почитать гайды, для того чтобы понять, как нужно переписать сервер на express.
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
