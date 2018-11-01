type State = { [keys: string]: any; };
type Action = string | number;
type Listener = (action?: Action, state?: State) => void;

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

export default class Readyx extends ReadyxStore {
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
