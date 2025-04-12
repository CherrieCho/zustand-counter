import "./App.css";
import { useState } from "react";
import Countbox from "./components/Countbox";
import counterStore from "./stores/counterStore";

function App() {
  //state 가져오기
  const { count, increaseBy, decreaseBy, reset } = counterStore();
  return (
    <div>
      <div className="count-container">
        <div>
          <Countbox count={count} />
        </div>
        <div className="buttons">
          <button onClick={() => increaseBy(1)}>+1</button>
          <button onClick={() => increaseBy(10)}>+10</button>
          <button onClick={() => decreaseBy(1)}>-1</button>
          <button onClick={() => decreaseBy(10)}>-10</button>
          <button onClick={reset}>리셋</button>
        </div>
      </div>
    </div>
  );
}

export default App;
