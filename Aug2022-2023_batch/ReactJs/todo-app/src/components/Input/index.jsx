import React, { useState } from "react";

export const Input = (props) => {
  const [todo, setTodo] = useState(props.isEditing ? props.todoValue : "");

  return (
    <div
      style={{
        display: "flex",
        alignSelf: "center",
      }}
    >
      <input
        placeholder={"Type Todo..."}
        onChange={(event) => {
          setTodo(event.target.value);
        }}
        value={todo}
        style={{
          padding: "5px",
          width: "500px",
          borderRadius: "8px",
          fontSize: "20px",
        }}
        onKeyDown={(event) => {
          if (event.code === "Enter") {
            event.preventDefault();
            props.handleSaveTodo(todo);
            setTodo("");
          }
        }}
      />
      <button
        onClick={(event) => {
          event.preventDefault();
          props.handleSaveTodo(todo);
          setTodo("");
        }}
        style={{
          padding: "15px",
          marginLeft: "5px",
          borderRadius: "8px",
          width: "75px",
          backgroundColor: "lightGreen",
        }}
      >
        {props.isEditing ? "Done" : "Add"}
      </button>
    </div>
  );
};
