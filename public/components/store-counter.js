import { StoreElement } from '../utils/store-element.js';
import store from '../utils/store.js';

class StoreCounter extends StoreElement {

    render(html) {
        return html`
            <style>
            .counter-negative {
                color: red;
            }
            .counter-positive {
                color: green;
            }
            </style>

            <h1 data-bind="
            textContent : counter 
                | 
            className : counterStyle
            ">0</h1>
        `;
    }

    get store() {
        return store;
    }

    mapState(state) {
        return {
            counter: state.counter,
            counterStyle: state.counter > 0 ? 'counter-positive' : 'counter-negative',
        }
    }
}

customElements.define('store-counter', StoreCounter);