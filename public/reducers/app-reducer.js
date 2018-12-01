import {
    COUNTER_INCREMENT,
    COUNTER_DECREMENT,
    COUNTER_RESET
} from '../actions/app-actions.js'

const initialState = {
    counter: 0,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case COUNTER_INCREMENT:
        return { ...state, counter: state.counter + payload.delta }

    case COUNTER_DECREMENT: 
        return {
            ...state,
            counter: state.counter - payload.delta,
        };

    case COUNTER_RESET:
        return {
            ...state,
            counter: 0,
        }

    default:
        return state
    }
}
