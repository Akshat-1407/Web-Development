import { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import DeltaCounterSlice from "../../redux/slice/DeltaCounterSlice";

const actions = DeltaCounterSlice.actions

function ReduxDeltaCounter() {

  const [value, setValue]  = useState("");

  const {count} = useSelector((store) => {return store.deltaCounterState});

  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment());
  }
  const decrement = () => {
    dispatch(actions.decrement());
  }
  const deltaHandler = () => {
    dispatch(actions.updateDelta(Number(value)));
  }


  return (
    <>
      <h2 style={{display: "flex", alignItems: "center", justifyContent: "center"}}>Redux Delta Counter</h2>

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

export default ReduxDeltaCounter
