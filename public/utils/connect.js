export const connect = (store) => (cls) => class extends HTMLElement {
    connectedCallback() {
        if(super.connectedCallback) {
            super.connectedCallback();
        }

        this._unsub = store.subscribe(state => this.stateChanged(store.getState()));
        this.stateChanged(store.getState());
    }

    disconnectedCallback() {
        this._unsub();

        if(super.disconnectedCallback) {
            super.disconnectedCallback();
        }
    }
}