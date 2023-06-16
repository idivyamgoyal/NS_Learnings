import { createSlice } from "@reduxjs/toolkit";
import { PRIORITY_LABEL_ORDER } from "../../../configs";
import { sortTodosBasedOnDone } from "../../../utils";

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
        return sortTodosBasedOnDone(firstTodo, secondTodo);
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
    updateDisplayOrder(state, action) {
      state.sort((firstTodo, secondTodo) => {
        if (firstTodo.priority === action.payload.sortOrder) {
          return firstTodo.isDone ? 1 : -1;
        } else if (secondTodo.priority === action.payload.sortOrder) {
          return secondTodo.isDone ? -1 : 1;
        } else {
          return sortTodosBasedOnDone(firstTodo, secondTodo);
        }
      });
    },
  },
});

export const { addTodo, markTodoDone } = todoSlice.actions;
export const TodoSliceReducer = todoSlice.reducer;
