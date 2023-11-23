import './App.css'
import { useState } from 'react';

let z = 0;
function App() {
  let count = 0;
  const [counter, setCounter] = useState(0);
  let condition = true;

  const [todos, setTodo] = useState(['todo 1 ', 'todo 2 ']);
  function ClickedIncrement(){
    console.log("Clicked on Increment", count);
    count += 1;
    z++;
  }
  function ClickedDecrement(){
    console.log("Clicked on Decrement", count);
    count -= 1;
    z--;
  }

  function ClickedCounterIncrement(){
    setCounter(counter+1)
    console.log("Clicked on counter Increment", counter);
    count += 1;
  }
  function ClickedCounterDecrement(){
    setCounter(counter-1)
    console.log("Clicked on counter Decrement", counter);
    count -= 1;
  }

  // if(condition){
  //   return <div>Hello</div>
  // }
  return (
    <>
      value of z: {z} 
      <div>Value of count is : {count}</div>
      <button onClick={ClickedIncrement}>Increment</button>
      <button onClick={ClickedDecrement}>Decrement</button>
      
      <div>Value of counter is : {counter} which is an {(counter%2==0)? 'Even':'Odd'} value</div>
      <button onClick={ClickedCounterIncrement}>Increment</button>
      <button onClick={ClickedCounterDecrement}>Decrement</button>

        <h1>Todo List</h1>
        {todos.map((value) => <li>{value}</li>)}
        <button onClick={()=> setTodo([...todos, 'todo 3 '])}>Click</button>
    </>
  )
}

export default App
