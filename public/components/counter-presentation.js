import { connect } from '../utils/connect.js';
import store from '../utils/store.js';

// Template
const html = String.raw;
const template = document.createElement('template');
template.innerHTML = html`
    <h1 id="counterNumber">0</h1>
`;

class CounterPresentation extends connect(store)(HTMLElement) {
    stateChanged(state) {
        this.counter = state.counter;
        this.render();
    }

    constructor() {
        super();
        this.appendChild(template.content.cloneNode(true));
        this.counterNumber = this.querySelector('#counterNumber');

        this.counter = 0;
        this.render();
    }

    render() {
        this.counterNumber.textContent = this.counter;
    }
}

customElements.define('counter-presentation', CounterPresentation);