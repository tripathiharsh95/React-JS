import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(1)

  //let counter = 5;

  const addValue = () => {
    console.log("clicked", counter);
    counter = counter + 1
    setCounter(counter)
  }

  const removeValue = () => {
    if (counter === 0) {
      return;
    }
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
