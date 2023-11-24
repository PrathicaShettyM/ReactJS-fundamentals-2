import { useState } from 'react';
import './App.css'

function App() {
const [counter, setCounter] = useState(0);
const [todos, setTodo] = useState(['todo1 ', 'todo2']);

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

      <div>
        <h1>This is a Todo List</h1>
        <h2>{todos.map((value, idx)=> <li key={idx}>{value}</li>)}</h2>
        <button onClick={()=> setTodo([...todos, 'todo3','todo4','todo5'])}>Add todo list</button>
       
      </div>
    </>
  )
}

export default App
