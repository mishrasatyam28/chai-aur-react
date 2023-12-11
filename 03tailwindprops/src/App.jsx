import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "hitesh",
    age:21
  }

  let myArr = [1,2,3]

  return (
    <>
     <h1 className='bg-green-400 p-4 rounded-xl'>Tailwind test</h1>

      <Card username="chaiaurcode"  btnText = "click me"/>
      <Card username="satyam"/>

    </>
  )
}

export default App
