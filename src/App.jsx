import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Countary';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {

  const [count, setCount] = useState(0)
  
  function handleClick(){
    alert('button cliocked')
  }
  const handleClick2 = () =>{
    alert('button 2 clicked')
  }

  const addToFive = (num) =>{
     alert(num + 5);
  }
  return (
    <> 
    <Friends></Friends>
      <Users></Users>
     <Team></Team>
      <Counter></Counter>
      
      <h2>React Core concepts </h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={()=> addToFive(10)}>Add Number</button>
    </>
  )
}

export default App
