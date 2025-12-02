import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(10)


  const increaseValue = () => {

    if(counter < 20){
      setCounter(counter + 1)
    }
  const decreaseValue = () => {
    if(counter > 0)
      setCounter(counter - 1)
  }
}


  return (
    <>
      <h1>Count the stars</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={increaseValue}>Increase Value{counter}</button>
      <br />
      <button onClick={decreaseValue}>Decrease Value{counter}</button>
    </>
  )
}

export default App
