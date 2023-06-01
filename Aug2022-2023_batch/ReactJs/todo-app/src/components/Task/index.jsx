import React from "react";

export const Task = (props) => {
  return (
    <div
      style={{
        margin: "10px",
        padding: "5px",
        flexDirection: "row",
        display: "flex",
        width: "80%",
        alignSelf: "center",
        borderRadius: "14px",
        boxShadow: "0px 0px 4px 2px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div
        style={{
          flex: 1,
          textDecoration: props.todo.isDone ? "line-through" : null,
          padding: "0px 5px 0px 20px",
        }}
      >
        <h4>{props.todo.value}</h4>
      </div>
      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          paddingRight: "15px",
        }}
      >
        <button style={{ marginRight: "5px" }} onClick={props.markTodoDone}>
          Done
        </button>
        <button style={{ marginRight: "5px" }} onClick={props.editTodo}>
          Edit
        </button>
        <button style={{ marginRight: "5px" }} onClick={props.deleteTodo}>
          Delete
        </button>
      </div>
    </div>
  );
};
