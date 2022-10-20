import React, { useState } from "react";

export default function NumberTwoPage() {
  const [result, setResult] = useState();
  const [inp, setInp] = useState("");
  function CheckChar(s) {
    let str = "";
    let len = s.length;
    for (let i = 0; i < len; i++) {
      let c = s[i];
      if (str.indexOf(c) < 0) {
        str += c;
      }
    }
    setResult(str);
    // return str;
  }
  // useEffect(() => {
  //   const a = unique("the quick brown fox jumps then quickly blow air");
  // }, []);

  return (
    <div>
      <div className=" flex space-x-4">
        <input
          className="border border-black"
          type="text"
          value={inp}
          onChange={(e) => setInp(e.target.value)}
        />
        <button
          className="bg-green-600 rounded-lg px-4"
          type="button"
          onClick={() => CheckChar(inp)}
        >
          Run
        </button>
      </div>
      <div className="flex">
        <h3>Result: {result}</h3>
      </div>
    </div>
  );
}
