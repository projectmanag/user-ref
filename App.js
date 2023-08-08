import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';
import { useState } from 'react';

function App() {
  const refelement= useRef("");
  const [name,setName]=useState("Khanjan");
  console.log(refelement)
  function Reset(){
    setName("")
    refelement.current.focus()
  }
  function handleInput(){
    refelement.current.style.color="green"
    refelement.current.value="Jeet"
  }
  return (
    <div className="App">
      <>
        <h1>Learning useRef</h1>
        <input ref={refelement} type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={Reset}>Reset</button>
        <button onClick={handleInput}>Handle Input</button>
      </>
    </div>
  );
}

export default App;
