import React from "react";

/** this component returns a position absolute jsx having `Loading...` in the middle */
export const Loader = (props) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(0, 0, 0, 0.45)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3 style={{ textAlign: "center", color: "#FFFFFF" }}>Loading...</h3>
    </div>
  );
};
