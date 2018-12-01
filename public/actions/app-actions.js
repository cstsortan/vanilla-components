export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const counterIncrement = (payload) => ({
  type: COUNTER_INCREMENT,
  payload
})

export const COUNTER_DECREMENT = 'COUNTER_DECREMENT'
export const counterDecrement = (payload) => ({
  type: COUNTER_DECREMENT,
  payload
})

export const COUNTER_RESET = 'COUNTER_RESET'
export const counterReset = (payload) => ({
  type: COUNTER_RESET,
  payload
})
