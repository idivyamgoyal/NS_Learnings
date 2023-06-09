import { faCheckDouble, faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PRIORITY_LABEL_COLORS = {
  Low: "green",
  Mid: "orange",
  High: "red",
};

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
          opacity: props.todo.isDone ? 0.4 : 1,
        }}
      >
        <h4>{props.todo.value}</h4>
      </div>
      <div style={{ display: "flex" }}>
        <h5
          style={{
            backgroundColor: PRIORITY_LABEL_COLORS[props.todo.priority],
            padding: "5px 10px",
            marginRight: "5px",
            opacity: props.todo.isDone ? 0.4 : 1,
          }}
        >
          {props.todo.priority}
        </h5>
        <div
          style={{
            backgroundColor: "white",
            display: "flex",
            paddingRight: "15px",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100px",
            marginLeft: "5px",
          }}
        >
          <FontAwesomeIcon
            icon={faCheckDouble}
            style={{ cursor: "pointer" }}
            onClick={props.todo.isDone ? null : props.markTodoDone}
            color="green"
            size="1.5x"
            opacity={props.todo.isDone ? 0.4 : 1}
          />
          <FontAwesomeIcon
            icon={faPencilAlt}
            style={{ cursor: "pointer" }}
            onClick={props.todo.isDone ? null : props.editTodo}
            size="1.5x"
            opacity={props.todo.isDone ? 0.4 : 1}
          />
          <FontAwesomeIcon
            icon={faTrashAlt}
            style={{ cursor: "pointer" }}
            onClick={props.deleteTodo}
            color="red"
            size="1.5x"
          />
        </div>
      </div>
    </div>
  );
};
