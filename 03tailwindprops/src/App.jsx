import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Harsh",
    age:20
  }

  let newArr = [1,2,3,4,5]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 '>Tailwind CSS</h1>
      <Card username="hacker" btnText="click me"/>
      <Card username="Harsh" btnText="visit me"/>
    </>
  )
}

export default App
