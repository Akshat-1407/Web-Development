import React from "react";

import {useSelector, useDispatch} from "react-redux";
import counterSlice from "../../redux/slice/CounterSlice";

const actions = counterSlice.actions

function ReduxCounter() {

  const count = useSelector((store) => {return store.counterState.count});

  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment());
  }
  const decrement = () => {
    dispatch(actions.decrement());
  }


  return (
    <>
      <h2 style={{display: "flex", alignItems: "center", justifyContent: "center"}}>Redux Counter</h2>
      
      <div style={{display: 'flex', justifyContent: 'center', width: "100vw"}}>

        <button onClick={decrement}>-</button>

        <h3> &nbsp;&nbsp;&nbsp; { count } &nbsp;&nbsp;&nbsp; </h3>

        <button onClick={increment}>+</button>

      </div>
    </>
  )
}

export default ReduxCounter
