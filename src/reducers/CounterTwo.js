import React, { useReducer } from 'react'

const initialState = {
  firstCounter: 0
}

// action is instructions to the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {firstCounter: state.firstCounter + action.value}
    case 'decrement':
      return { firstCounter: state.firstCounter - action.value }
    case 'reset':
      return initialState
    default:
      return state
  }
}

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <div> Count - {count.firstCounter}</div>
      {/* <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button> */}
      <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment 1</button>
      <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement 1</button>
      <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment 5</button>
      <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement 5</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  )
}

export default CounterTwo;
