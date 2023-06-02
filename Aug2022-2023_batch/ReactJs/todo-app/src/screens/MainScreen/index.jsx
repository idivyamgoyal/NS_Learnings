import React, { useRef, useState } from "react";
import { EditTodo, Input, Task } from "../../components";

export const MainScreen = (props) => {
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingTodo, setEditingTodo] = useState();
  const updatingIdx = useRef();

  /**this function will add new-todo in the todo-list
   * @param todo this is the new todo which will be added in the list which is inserted in the end
   */
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

  /** this function take care to store the index of the todo which will be edited
   * @param index expect an index of the todo which need to be updated
   */
  const editTodo = (index) => {
    updatingIdx.current = index;
    setIsEditing(true);
    setEditingTodo({ ...todos[index] });
  };

  /** this function will handle the saving of the updated todo
   * @param todoValue this is the updated todos-value which will be updated in the original list
   */
  const saveEditTodo = (todoValue) => {
    const todos_copy = todos.filter((todo, idx) => {
      if (updatingIdx.current === idx) {
        todo.value = todoValue;
      }

      return todo;
    });

    setTodos(todos_copy);
    hideEditing();
  };

  /** this function is used to hide the editing modal
   * @param none
   */
  const hideEditing = () => {
    setIsEditing(false);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        // backgroundColor: "red",
      }}
    >
      {isEditing && (
        <EditTodo todo={editingTodo} handleSaveTodo={saveEditTodo} hideEditing={hideEditing} />
      )}
      <div style={{ marginBottom: "20px" }}>
        <h1 style={{ paddingLeft: "15px" }}>TodoApp</h1>
        <hr />
      </div>
      <Input handleSaveTodo={addTodo} isEditing={false} />
      <div style={{ margin: "10px 0px 10px 0px" }} />
      {todos.map((todo, index) => {
        return (
          <Task
            todo={todo}
            markTodoDone={() => {
              markTodoDone(index);
            }}
            editTodo={() => {
              editTodo(index);
            }}
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
