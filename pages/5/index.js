import React, { useEffect } from "react";

export default function NumberFivePage() {
  const input = [1, 2, 4, 5, 9];
  const sum = 7;

  function Operate(sum, input) {
    input.forEach((item, index) => {
      let arr = [];
      if (sum - item > 0) {
        // for (let i = index; i < input.length; i++) {
        //   if (sum - item - index[i] >= 0) {
        //     console.log("conatin:", index[i]);
        //   }
        // }
      }
    });
  }

  useEffect(() => {
    Operate(sum, input);
    // console.log("bound");
    // console.log(a);
  }, []);

  return <div>index</div>;
}
