import React, { useEffect } from "react";

export default function NumberTwoPage() {
  function unique(s) {
    let str = "";
    let len = s.length;
    for (let i = 0; i < len; i++) {
      // character at i'th index of s
      let c = s[i];

      // if c is present in str, it returns
      // the index of c, else it returns -1
      if (str.indexOf(c) < 0) {
        // adding c to str if -1 is returned
        str += c;
      }
    }

    return str;
  }
  useEffect(() => {
    const a = unique("the quick brown fox jumps then quickly blow air");
    console.log(a);
  }, []);

  return <div>index</div>;
}
