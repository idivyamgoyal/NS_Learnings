import { configureStore } from "@reduxjs/toolkit";
import { TodoSliceReducer } from "./feature";

export const store = configureStore({
  reducer: {
    todos: TodoSliceReducer,
  },
});
