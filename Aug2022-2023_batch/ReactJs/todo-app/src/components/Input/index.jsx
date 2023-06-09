import React, { useState } from "react";

const PRIORITY_LABELS = ["Low", "Mid", "High"];

export const Input = (props) => {
  const [todo, setTodo] = useState(props.isEditing ? props.todoValue : "");
  const [todoPriority, setTodoPriority] = useState(props.isEditing ? props.todoPriority : "Low");

  return (
    <div
      style={{
        display: "flex",
        alignSelf: "center",
        flexDirection: "column",
      }}
    >
      <div>
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
              props.handleSaveTodo(todo, todoPriority);
              setTodo("");
              setTodoPriority("Low");
            }
          }}
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            props.handleSaveTodo(todo, todoPriority);
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
      <div style={{ justifyContent: "space-between", display: "flex", width: "500px" }}>
        {PRIORITY_LABELS.map((priorityLabel, idx) => {
          return (
            <label
              htmlFor={priorityLabel}
              key={priorityLabel}
              style={{ color: props.isEditing ? "#FFFFFF" : "#000000" }}
            >
              {priorityLabel}
              <input
                type={"radio"}
                onClick={() => {
                  setTodoPriority(priorityLabel);
                }}
                checked={todoPriority === priorityLabel}
                id={priorityLabel}
                value={priorityLabel}
              />
            </label>
          );
        })}
      </div>
    </div>
  );
};
