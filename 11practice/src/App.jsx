import { useState } from "react";

import Home from "./components/Home.jsx";

// import { MyHeading as satyamHeading } from "./components/MyHeading";

// import SatyamName from "./components/MyHeading";

// import Satyam, {
//   MyHeadingOne,
//   MyHeadingTwo,
//   MyHeadingThree,
// } from "./components/MyHeading";
// import Product from "./components/Product";

// const Heading = (props) => <h2>{props.name}</h2>;

function App() {
  const obj = {
    a: 1,
    b: "jaadu",
  };
  // OR
  const obj1 = {
    aa: 1,
    bb: "jaadu",
  };
  const { aa, bb } = obj1;

  const a = 123;
  return (
    <>
      <Home />
      {/* <MyHeadingOne />
      <Satyam name="satyam" text="NiceOne" />
      <MyHeadingTwo />
      <h1>
        Hello {obj.a} & {obj.b}
      </h1>
      <h2>
        World {aa} & {bb}
      </h2>
      <MyHeadingThree /> */}
      {/* <Product /> */}
    </>
  );
}

export default App;
