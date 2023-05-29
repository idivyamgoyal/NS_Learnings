import React, { useEffect, useRef, useState } from "react";

// const devNames = ["Jadhav", "Dhammpal", "Syed", "Pappai", "Nitin"];

export const Component3 = (props) => {
  const [counter, setCounter] = useState(0);
  const [printLoop, setPrintLoop] = useState(0);
  const [devName, setDevName] = useState("");
  const devNames = useRef(["Jadhav", "Dhammpal", "Syed", "Pappai", "Nitin"]);

  // useEffect(() => {
  //   // if I'm running a costly fn or calculation in this use-effect then it will be triggered on every
  //   // re-render -----> remedy ---> dependency array

  //   // mounting --- componentDidMount (from class components)
  //   console.log("rendering comp3...");

  //   // this should be performed on the first render or on a particular state change
  //   // for (let idx = 0; idx < 10000; idx++) {
  //   //   console.log("Hi from " + idx);
  //   // }

  //   // unmounting --- componentWillUnmount (from class components)
  //   return () => {
  //     console.log("comp3 is unmounting...");
  //   };
  // });

  useEffect(() => {
    console.log("running with counter: " + counter);
    if (counter % 2 === 0) {
      setPrintLoop((prev) => prev + 1);
      console.log("changing value of printLoop: " + counter);
    } else {
      // console.log("devName: " + devNames[0]);
      // const arrrayCopy = [...devNames.current];
      // setDevName(arrrayCopy[(counter - 1) % devNames.current.length]);
      console.log("changing refs value and this should not trigger **I'll render.... use-effect**");
      devNames.current = [];
    }
  }, [counter]);

  // useEffect with dependency array
  useEffect(() => {
    // this will be triggered on the very
    for (let idx = 0; idx < 500; idx++) {
      // console.log("Hi from " + devName + " --> " + idx);
    }
  }, [printLoop, devName]);

  // useEffect(() => {
  //   console.log("ref's value is initialized: " + devNames.current);
  // }, [devNames.current]);

  useEffect(() => {
    return () => {
      console.log("component is unmounting");
    };
  }, []);

  useEffect(() => {
    console.log("I'll render each time");
  });

  return (
    <div>
      <h1>Hi!! This is component3...</h1>

      <button
        onClick={(event) => {
          event.preventDefault();

          console.log(
            "changing refs value and this should not trigger **I'll render.... use-effect**",
          );
          devNames.current = [];
          // setCounter((prev) => prev + 1);
        }}
      >
        Increment {counter}
      </button>
    </div>
  );
};
