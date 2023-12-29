import { useState } from "react";

import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1>Learn about redux toolKit</h1>
      <AddTodo />
      <Todos />
    </>
  );
}
// 19min

export default App;
