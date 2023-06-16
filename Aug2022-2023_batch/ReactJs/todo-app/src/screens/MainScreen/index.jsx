import React, { useEffect, useState } from "react";
import { EditTodo, Input, PriorityOrder, Task } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromLocalStorage, getFromLocalStorage } from "../../utils";
import { TODOD_KEYS } from "../../configs";

export const MainScreen = (props) => {
  // store
  const todos = useSelector((state) => state.todos);

  // hooks, refs, states
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editingTodo, setEditingTodo] = useState();

  /**this function will add new-todo in the todo-list
   * @param todo this is the new todo which will be added in the list which is inserted in the end
   * @param priority this is the todo priority on which the todos are sorted and displayed
   */
  const addTodo = (todo, priority) => {
    dispatch({ type: "todos/addTodo", payload: { todo, priority } });
  };

  /**this function marks a todo done
   * @param todoId the todo associated with this todoId will be marked as done
   */
  const markTodoDone = (todoId) => {
    dispatch({ type: "todos/markTodoDone", payload: { todoId } });
  };

  /**this function deletes a todo
   * @param todoId the todo associated with this todoId will be deleted
   */
  const deleteTodo = (todoId) => {
    dispatch({ type: "todos/deleteTodo", payload: { todoId } });
  };

  /** this function take care to store the index of the todo which will be edited
   * @param index expect an index of the todo which need to be updated
   */
  const editTodo = (index) => {
    setIsEditing(true);
    setEditingTodo({ ...todos[index] });
  };

  /** this function will handle the saving of the updated todo
   * @param todoValue this is the updated todos-value which will be updated in the original list
   * @param updatedPriority this is the updated-todo priority on which the todos are sorted and displayed
   */
  const saveEditTodo = (todoValue, updatedPriority) => {
    dispatch({
      type: "todos/saveEditTodo",
      payload: { todoId: editingTodo.id, value: todoValue, priority: updatedPriority },
    });
    hideEditing();
  };

  /** this function is used to hide the editing modal
   * @param none
   */
  const hideEditing = () => {
    setIsEditing(false);
  };

  /** this function will update the todos display order based upon the display order
   * @param displayOrder accepts low, mid, & high values defined in `config.ts` file wrt `redux` configs
   */
  const handleUpdateDisplayOrder = (displayOrder) => {
    dispatch({
      type: "todos/updateDisplayOrder",
      payload: { sortOrder: displayOrder },
    });
  };

  /** this function will delete all todos from the local-storage and will refresh the whole page */
  const deleteAllTodos = () => {
    deleteFromLocalStorage(TODOD_KEYS.saveTodoKey);
    window.location.reload();
  };

  useEffect(() => {
    const savedTodos = getFromLocalStorage(TODOD_KEYS.saveTodoKey);
    dispatch({
      type: "todos/loadTodosFromLocalStorage",
      payload: { savedTodos },
    });
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {isEditing && (
        <EditTodo todo={editingTodo} handleSaveTodo={saveEditTodo} hideEditing={hideEditing} />
      )}
      <div style={{ marginBottom: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "15px 20px" }}>
          <h1>TodoApp</h1>
          <button
            style={{
              padding: "10px",
              backgroundColor: "red",
              color: "white",
              border: "0px",
              boxShadow: "0px 0px 4px 2px rgba(0, 0, 0, 0.25)",
              cursor: "pointer",
            }}
            onClick={deleteAllTodos}
          >
            <strong>DELETE ALL TODOS</strong>
          </button>
        </div>
        <hr />
      </div>
      <Input handleSaveTodo={addTodo} isEditing={false} />

      <div style={{ display: "flex", alignItems: "center", margin: "30px 0px 0px 10%" }}>
        <h2 style={{ marginRight: "20px" }}>Display Order: </h2>
        <PriorityOrder updateDisplayOrder={handleUpdateDisplayOrder} />
      </div>

      <div style={{ margin: "10px 0px 10px 0px" }} />

      {todos.map((todo, index) => {
        return (
          <Task
            todo={todo}
            markTodoDone={() => {
              markTodoDone(todo.id);
            }}
            editTodo={() => {
              editTodo(index);
            }}
            deleteTodo={() => {
              deleteTodo(todo.id);
            }}
            key={todo.id}
          />
        );
      })}
    </div>
  );
};
