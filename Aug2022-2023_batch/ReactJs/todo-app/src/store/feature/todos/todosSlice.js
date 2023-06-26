import { createSlice } from "@reduxjs/toolkit";
import { PRIORITY_LABEL_ORDER, TODOD_KEYS } from "../../../configs";
import { saveInLocalStorage, sortTodosBasedOnDone } from "../../../utils";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo(state, action) {
      if (
        action.payload.todoData.value === null ||
        action.payload.todoData.value === undefined ||
        action.payload.todoData.value === ""
      ) {
        window.alert("Empty Todo! Please enter a value to proceed...");
        return;
      }
      state.push(action.payload.todoData);
      state.sort((firstTodo, secondTodo) => {
        // returns -ve (firstTodo will be placed before the secondTodo), zero (either of the values will be adjusted to each other), +ve (secondTodo will be placed before the firstTodo)
        return PRIORITY_LABEL_ORDER[firstTodo.priority] - PRIORITY_LABEL_ORDER[secondTodo.priority];
      });
      saveInLocalStorage(TODOD_KEYS.saveTodoKey, state);
    },
    markTodoDone(state, action) {
      const todoToBeMarked = state.find((todo) => todo.id === action.payload.todoId);
      todoToBeMarked.isDone = true;

      state.sort((firstTodo, secondTodo) => {
        return sortTodosBasedOnDone(firstTodo, secondTodo);
      });

      saveInLocalStorage(TODOD_KEYS.saveTodoKey, state);
    },
    deleteTodo(state, action) {
      const todoIdxToBeDeleted = state.findIndex((todo) => todo.id === action.payload.todoId);
      state.splice(todoIdxToBeDeleted, 1);

      saveInLocalStorage(TODOD_KEYS.saveTodoKey, state);
    },
    saveEditTodo(state, action) {
      const todoToBeEdited = state.find((todo) => todo.id === action.payload.todoId);
      todoToBeEdited.value = action.payload.value;
      todoToBeEdited.priority = action.payload.priority;

      state.sort((firstTodo, secondTodo) => {
        return PRIORITY_LABEL_ORDER[firstTodo.priority] - PRIORITY_LABEL_ORDER[secondTodo.priority];
      });

      saveInLocalStorage(TODOD_KEYS.saveTodoKey, state);
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

      saveInLocalStorage(TODOD_KEYS.saveTodoKey, state);
    },
    loadTodosFromLocalStorage(state, action) {
      action.payload.savedTodos?.forEach((todo) => {
        state.push(todo);
      });
    },
  },
});

export const { addTodo, markTodoDone } = todoSlice.actions;
export const TodoSliceReducer = todoSlice.reducer;
