import { createSlice } from "@reduxjs/toolkit";

const PRIORITY_LABEL_ORDER = {
  High: 1,
  Mid: 2,
  Low: 3,
};

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo(state, action) {
      if (
        action.payload.todo === null ||
        action.payload.todo === undefined ||
        action.payload.todo === ""
      ) {
        window.alert("Empty Todo! Please enter a value to proceed...");
        return;
      }
      state.push({
        value: action.payload.todo,
        isDone: false,
        id: Date.now(),
        priority: action.payload.priority,
      });
      state.sort((firstTodo, secondTodo) => {
        // returns -ve (firstTodo will be placed before the secondTodo), zero (either of the values will be adjusted to each other), +ve (secondTodo will be placed before the firstTodo)
        return PRIORITY_LABEL_ORDER[firstTodo.priority] - PRIORITY_LABEL_ORDER[secondTodo.priority];
      });
    },
    markTodoDone(state, action) {
      const todoToBeMarked = state.find((todo) => todo.id === action.payload.todoId);
      todoToBeMarked.isDone = true;

      state.sort((firstTodo, secondTodo) => {
        if (firstTodo.isDone) {
          return 1;
        } else if (secondTodo.isDone) {
          return -1;
        } else {
          return (
            PRIORITY_LABEL_ORDER[firstTodo.priority] - PRIORITY_LABEL_ORDER[secondTodo.priority]
          );
        }
      });
    },
    deleteTodo(state, action) {
      const todoIdxToBeDeleted = state.findIndex((todo) => todo.id === action.payload.todoId);
      state.splice(todoIdxToBeDeleted, 1);
    },
    saveEditTodo(state, action) {
      const todoToBeEdited = state.find((todo) => todo.id === action.payload.todoId);
      todoToBeEdited.value = action.payload.value;
      todoToBeEdited.priority = action.payload.priority;

      state.sort((firstTodo, secondTodo) => {
        return PRIORITY_LABEL_ORDER[firstTodo.priority] - PRIORITY_LABEL_ORDER[secondTodo.priority];
      });
    },
  },
});

export const { addTodo, markTodoDone } = todoSlice.actions;
export const TodoSliceReducer = todoSlice.reducer;
