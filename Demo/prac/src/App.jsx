import { useState } from 'react';
import './App.css'

function App() {
const [counter, setCounter] = useState(0);

function counterIncrease(){
  setCounter(counter+1);
  console.log("The counter increases by ", counter);
}
function counterDecrease(){
  setCounter(counter-1);
  console.log("The counter decreases by ", counter);
}
  return (
    <>
      <div>
        <h1>This is a counter</h1>
        <h2>The value of count is: {counter}</h2>
        <button onClick={counterIncrease}>Increment</button>
        <button onClick={counterDecrease}>Decrement</button>
      </div>
    </>
  )
}

export default App
