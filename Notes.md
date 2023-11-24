## State Variables in React {useState}
- used to trigger event
- stored in memory of component and will be tracked by the component
- any change in state variables causes re-rendering of the component
```
  const [counter, setCounter] = useState(0);
```
```
  const [stateVariable, setterFunction] = useState(0);
```
- In the above ex, it takes only 1 argument(0) i.e., your intial Value of state variable then returns an array of 2 values
- 0th index(counter) returns state variable =>tracked by react(re-renders anything if required)
- 1st index is setter function => to display any DOM manipulation stuff


* Why we see changes in the UI?
    - because counter is a `stateVariable`
    - When you change/update the value of stateVariable - counter using setter function, then it triggers a re-render to React and the whole component re-renders

* `count` changes bu not `counter` why?
- because count is a normal local variable, it gets reset every time
- but counter is a special variable => state variable
- changes in state variable causes re-render

Note:
- All states remain separate from each other
- if there is multiple calls for <App/> which is same component, each state remains separate from each other
- `global Variables` get re-rendered while local variables won't
- `Avoid global variables`


## props(similar to attributes)
- for div-class
- for img-src, alt
- additional properties of a tag

- children of props
- app.jsx(inside the function app)
```
<Avatar src="" width="" height="">
  <div>Hello</div>
  <div>Hi</div>
</Avatar>
```

```
function Avatar(props){
console.log(props);
    return(
        <>
        <img src={props.src} width={props.width} height={props.height}/>
        </>
    );
}   
```

```
 function Avatar({src, height, width}){
  <>
  <img src={src} width={width} height={height}/>
 </>
 }
```

## Hooks in React
- used to create state variables
- special helper functions
- do task like DOM manipulation