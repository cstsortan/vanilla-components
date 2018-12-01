import appReducer from '../reducers/app-reducer.js'

class Store {
    constructor(reducer, options = {enableLog: false}) {
        this._reducer = reducer;
        this._listenners = [];

        // calling just reducer() throws error
        this._state = reducer(undefined, {type: undefined});
        this._enableLog = options.enableLog;
        if(this._enableLog) this._log(undefined, undefined, this._state);
    }

    dispatch(action) {
        const nextState = this._reducer(this._state, action);
        if(this._enableLog) this._log(action, this._state, nextState);
        this._state = nextState;
        this._notifyListenners();
    }

    getState() {
        return this._state;
    }

    subscribe(listen) {
        const newListenner = {
            listen,
            unsubscribe: () => this._listenners = this._listenners.filter(l => l !== newListenner)
        };
        this._listenners.push(newListenner)
        listen(this._state);
        return newListenner.unsubscribe;
    }

    _notifyListenners() {
        this._listenners.forEach(listenner => {
            listenner.listen(this.state);
        });
    }

    _log(action, prev, next) {
        console.log({action: action, prevState: prev, nextState: next});
    }

}

export default new Store(
    appReducer
);
