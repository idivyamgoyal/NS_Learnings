import { useState } from "react";
import { Component1, Component3, Component4 } from "./components";
import Component2 from "./components/Component2";
// import { Component3, Component4 } from "./components/functionalComponents";
// import { Component3 } from "./components/functionalComponents/Component3";
// import { Component4 } from "./components/functionalComponents/Component4";

function App() {
  const [showFirstComponent, setShowFirstComponent] = useState(true);
  const [toggleThirdComponent, setToggleThirdComponent] = useState(false);

  const toggleShowComponentOne = (event) => {
    event.preventDefault();
    // true  ----- !true --- false
    // true --> false --> true
    // TODO: try directly updating the state and then try the below prev method...
    setShowFirstComponent((prev) => !prev);
  };

  return (
    <>
      {showFirstComponent ? <Component1 /> : <Component2 />}

      <button onClick={toggleShowComponentOne}>
        Show Component{showFirstComponent ? "2" : "1"}
      </button>

      <hr />

      {!toggleThirdComponent ? <Component3 /> : <Component4 />}

      <button
        onClick={() => {
          setToggleThirdComponent((prev) => !prev);
        }}
      >
        Hide Component{toggleThirdComponent ? "4" : "3"}
      </button>
    </>
  );
}

export default App;
