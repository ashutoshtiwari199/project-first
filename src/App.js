import { useState } from 'react'
import Component from './component/Component'
import './index'
const App = ()=>{
  // const name= "Amitabh"
  const [ name, setName ] = useState("Amitabh123"); 

  const changeName = ()=>{
    setName("Amit");
  }

  const changeNameBack = ()=>{
    setName("Amitabh")
  }

  return(
    <div>
      <h1 className='red'>Hello, {name} </h1>
      <button onClick={()=> changeName()} >ChangeName</button>
      <button onClick={()=> changeNameBack()} >ChangeNameBack</button>
    </div>
  )
}

export default App;