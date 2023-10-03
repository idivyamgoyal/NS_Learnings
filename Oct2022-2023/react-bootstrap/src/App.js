import { useState } from "react";
import { MainScreen, MainScreen02, MainScreen03 } from "./Screens";

function App() {
  const [hideScreen01, setHideScreen01] = useState(false);

  return (
    <>
      <button
        onClick={(event) => {
          event.preventDefault();
          setHideScreen01((prev) => !prev);
        }}
      >
        {hideScreen01 ? "Show" : "Hide"} Screen01
      </button>
      {!hideScreen01 && <MainScreen />}
      <MainScreen02 />
      <MainScreen03 />
    </>
  );
}

export default App;
