import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  // const dispatch = useDispatch();
  // const { coins } = useSelector((state) => state.first);

  const handler = () => {
    dispatch({
      type: "humaraFirstCase",
      payload: ["BTC", "ETH", "SHIB"],
    });
  };
  const { counter } = useSelector((state) => state.first);
  const dispatch = useDispatch();

  const Add = () => {
    dispatch({
      type: "incrementCase",
    });
  };
  const Sub = () => {
    dispatch({
      type: "decrementCase",
    });
  };

  return (
    <div style={{ display: "flex", gap: "50px" }}>
      {/* <button onClick={handler}>Click</button>
      <h1>{coins[0]}</h1> */}
      <div>
        <button onClick={Add}>+</button>
      </div>
      <div>
        <p>{counter}</p>
      </div>
      <div>
        <button onClick={Sub}>-</button>
      </div>
    </div>
  );
}

export default App;
