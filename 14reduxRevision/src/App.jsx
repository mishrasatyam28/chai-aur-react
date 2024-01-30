import { useState } from "react";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const handler = () => {
    dispatch({
      type: "humaraFirstCase",
      payload: ["BTC", "ETH", "SHIB"],
    });
  };

  return (
    <div>
      <button onClick={handler}>Click</button>
    </div>
  );
}

export default App;
