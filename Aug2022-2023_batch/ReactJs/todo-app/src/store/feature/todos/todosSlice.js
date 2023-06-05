import { createSlice } from "@reduxjs/toolkit";

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
      });
    },
    markTodoDone(state, action) {
      const todoToBeMarked = state.find((todo) => todo.id === action.payload.todoId);
      todoToBeMarked.isDone = true;
    },
    deleteTodo(state, action) {
      const todoIdxToBeDeleted = state.findIndex((todo) => todo.id === action.payload.todoId);
      state.splice(todoIdxToBeDeleted, 1);
    },
    saveEditTodo(state, action) {
      const todoToBeEdited = state.find((todo) => todo.id === action.payload.todoId);
      todoToBeEdited.value = action.payload.value;
    },
  },
});

export const { addTodo, markTodoDone } = todoSlice.actions;
export const TodoSliceReducer = todoSlice.reducer;
