import React from 'react'
import counterStore from "../stores/counterStore";

const Countbox = () => {
  const { count } = counterStore();
  return (
    <div>
      <h2>Count: {count}</h2>
    </div>
  )
}

export default Countbox