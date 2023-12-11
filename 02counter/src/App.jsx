import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  const [counter,setCounter] = useState(15)

  const addValue = () =>{
    if(counter<20){
      setCounter(counter + 1)
    }
  
  }
  const removeValue = () =>{
    if(counter>0){
    setCounter(counter - 1)
    }
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter Value: {counter}</h2>

    <button 
    onClick={addValue}
    >Add Value {counter}</button>
    <br />
    <button
    onClick={removeValue}
    >remove value {counter}</button>
    </>
  )
}

export default App
