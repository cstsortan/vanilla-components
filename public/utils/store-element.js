export class StoreElement extends HTMLElement {
    connectedCallback() {
        if(super.connectedCallback) {
            super.connectedCallback();
        }
        if(!this.store) return;
        this._unsub = this.store.subscribe(() => this.stateChanged(this.store.getState()));
        this.stateChanged(this.store.getState());
    }

    disconnectedCallback() {
        if(this._unsub)this._unsub.unsubscribe();;
        if(super.disconnectedCallback) {
            super.disconnectedCallback();
        }
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        const template = document.createElement('template');
        template.innerHTML = this.render(String.raw);
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.refs = {};
        Array.from(this.shadowRoot.querySelectorAll('[data-ref]')).forEach(element => {
            this.refs[element.dataset.ref] = element;
        });
    }

    stateChanged(state) {
        let elementState = state;
        if(this.mapState) {
            elementState = this.mapState(state);
        }
        // Array.from(this.shadowRoot.querySelectorAll('[data-if]')).forEach(element => {
            
        // });
        Array.from(this.shadowRoot.querySelectorAll('[data-bind]')).forEach(element => {
            bind(element, elementState)
        });
    }
}

function bind(element, state) {
    element.dataset.bind.trim().split('|').forEach(bind => {
        const propName = bind.trim().split(':')[0].trim();
        const subState = bind.trim().split(':')[1].trim();
        element[propName] = state[subState];
    });
}