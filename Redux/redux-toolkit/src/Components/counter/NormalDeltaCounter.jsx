import { useState } from 'react'

function NormalDeltaCounter() {
  const [count, setCount] = useState(0);
  const [delta, setDelta] = useState(1);
  const [value, setValue]  = useState("");

  const increment = () => {
    setCount(count+delta);
  }

  const decrement = () => {
    setCount(count-delta);
  }

  const deltaHandler = () => {
    setDelta(Number(value));
  }

  return (
    <>
      <h2 style={{display: "flex", alignItems: "center", justifyContent: "center"}}>Normal Delta Counter</h2>

      <div style={{display: 'flex', justifyContent: 'center', width: "100vw", marginBottom: "1.5rem"}}>

        <input type="text" value={value} style={{ marginRight: "1rem", borderRadius: "0.5rem"}} onChange={(e) => {setValue(e.target.value)}}/>
        <button onClick={deltaHandler}>Delta</button>

      </div>
      <div style={{display: 'flex', justifyContent: 'center', width: "100vw"}}>

        <button onClick={decrement}>-</button>
        <p> &nbsp; &nbsp; &nbsp; Count: {count} &nbsp; &nbsp; &nbsp; </p>
        <button onClick={increment}>+</button>
        
      </div>
    </>
  )
}

export default NormalDeltaCounter
