import React from "react";
import Product from "./Product";

function Home() {
  const arr = [1, 2, 3, 4];
  return (
    <div>
      {arr.map((i) => (
        <Product value={i} key={i} />
      ))}
    </div>
  );
}

export default Home;
