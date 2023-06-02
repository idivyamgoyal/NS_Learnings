import React from "react";
import { Input } from "../Input";

export const EditTodo = (props) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          boxShadow: "0px 0px 5px 3px",
          backgroundColor: "rgba(0, 0, 0, 0.95)",
          borderRadius: "4px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "700px",
          height: "500px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            padding: "1px 18px",
            borderRadius: "50%",
            top: -25,
            right: -25,
          }}
          onClick={props.hideEditing}
        >
          <h5 style={{ color: "white" }}>X</h5>
        </div>
        <Input isEditing handleSaveTodo={props.handleSaveTodo} todoValue={props.todo.value} />
      </div>
    </div>
  );
};
