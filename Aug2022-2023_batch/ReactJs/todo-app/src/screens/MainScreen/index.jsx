import React, { useState } from "react";
import { Input, Task } from "../../components";

export const MainScreen = (props) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (todo === null || todo === undefined || todo === "") {
      window.alert("Empty Todo! Please enter a value to proceed...");
      return;
    }

    setTodos((prev) => [...prev, { value: todo, isDone: false }]);
  };

  /**this function marks a todo done
   * @param index this index will be marked as done
   */
  const markTodoDone = (index) => {
    const todos_copy = todos.filter((todo, todoIndex) => {
      if (index === todoIndex) {
        todo.isDone = true;
      }

      return todo;
    });

    setTodos(todos_copy);
  };

  /**this function deletes a todo
   * @param index this index will be deleted from the todo
   */
  const deleteTodo = (index) => {
    const todo_copy = todos.filter((todo, todoIndex) => {
      if (index === todoIndex) {
        // skip this todo, and don't return anything
      } else {
        return todo;
      }
    });

    setTodos(todo_copy);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <h1 style={{ paddingLeft: "15px" }}>TodoApp</h1>
        <hr />
      </div>
      <Input addTodo={addTodo} />
      <div style={{ margin: "10px 0px 10px 0px" }} />
      {todos.map((todo, index) => {
        return (
          <Task
            todo={todo}
            markTodoDone={() => {
              markTodoDone(index);
            }}
            // editTodo
            deleteTodo={() => {
              deleteTodo(index);
            }}
            key={`${todo.value}{index}`}
          />
        );
      })}
    </div>
  );
};
