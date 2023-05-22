import React, { useEffect, useState } from "react";

export const Component3 = (props) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // if I'm running a costly fn or calculation in this use-effect then it will be triggered on every
    // re-render -----> remedy ---> dependency array

    // mounting --- componentDidMount (from class components)
    console.log("rendering comp3...");

    // this should be performed on the first render or on a particular state change
    // for (let idx = 0; idx < 10000; idx++) {
    //   console.log("Hi from " + idx);
    // }

    // unmounting --- componentWillUnmount (from class components)
    return () => {
      console.log("comp3 is unmounting...");
    };
  });

  // useEffect with dependency array
  // useEffect(()=>{
  //   // this will be triggered on the very
  //   for (let idx = 0; idx < 10000; idx++) {
  //     console.log("Hi from " + idx);
  //   }
  // }, [])

  return (
    <div>
      <h1>Hi!! This is component3...</h1>

      <button
        onClick={(event) => {
          event.preventDefault();

          setCounter((prev) => prev + 1);
        }}
      >
        Increment {counter}
      </button>
    </div>
  );
};
