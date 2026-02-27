import { useState } from 'react'

function NormalCounter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count+1);
  }

  const decrement = () => {
    setCount(count-1);
  }


  return (
    <>
      <h2 style={{display: "flex", alignItems: "center", justifyContent: "center"}}>Normal Counter</h2>

      <div style={{display: 'flex', justifyContent: 'center', width: "100vw"}}>

        <button onClick={decrement}>-</button>

        <p> &nbsp; &nbsp; &nbsp; Count: {count} &nbsp; &nbsp; &nbsp; </p>

        <button onClick={increment}>+</button>

      </div>
    </>
  )
}

export default NormalCounter
