import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt[char];
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  // useEffect
  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white py-3 text-center text-xl">
          Password generator
        </h1>
        {/* input text */}
        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>
        {/* next line */}
        <div className="flex text-sm gap-x-2 ">
          {/* item-1 */}
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer text-blue-300"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          {/* item-2 */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="characterInput"
              defaultChecked={charAllowed}
              onChange={(e) => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
          {/* item-3 */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="numberInput"
              defaultChecked={numAllowed}
              onChange={(e) => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
