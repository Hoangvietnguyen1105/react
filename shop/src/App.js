
import React from "react";
import { useState } from "react";

function App(){

  const [test,setTest] = useState(0)
  function handleClick(){
      setTest(test+1)
      setTest((a)=>a+1)
  }
  return(
    <>
      <h1>{test}</h1>
      <button onClick={handleClick}>click</button>
    </>
  )
}

export default App;
