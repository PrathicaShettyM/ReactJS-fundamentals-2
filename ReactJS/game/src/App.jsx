import './App.css'

function App() {
  let count = 0;

  function ClickedIncrement(){
    console.log("Clicked on Increment", count);
    count += 1;
  }
  function ClickedDecrement(){
    console.log("Clicked on Decrement", count);
    count -= 1;
  }

  return (
    <>
      <div>Value of count is : {count}</div>
      <button onClick={ClickedIncrement}>Increment</button>
      <button onClick={ClickedDecrement}>Decrement</button>

    </>
  )
}

export default App
