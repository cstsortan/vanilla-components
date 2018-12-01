import store from '../utils/store.js';
import { counterIncrement, counterDecrement, counterReset } from '../actions/app-actions.js';
import { StoreElement } from '../utils/store-element.js';

class CounterControls extends StoreElement {

    render(html) {
        return html`
            <button data-on="click:increment" data-ref="incrementBtn">Increment</button>
            <button data-ref="decrementBtn">Decrement</button>
            <button data-ref="resetBtn">Reset</button>
        `;
    }

    addListenners() {
        this.refs.incrementBtn.addEventListener('click', () => {
            store.dispatch(counterIncrement({
                delta: 1
            }));
        });
        this.refs.decrementBtn.addEventListener('click', () => {
            store.dispatch(counterDecrement({
                delta: 1,
            }));
        });
        this.refs.resetBtn.addEventListener('click', () => {
            store.dispatch(counterReset());
        });
    }

    constructor() {
        super();
        this.addListenners();
    }

}
customElements.define('counter-controls', CounterControls);