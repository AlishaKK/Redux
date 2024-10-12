// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import todoReducer from "./todoSlice"
export const store = configureStore({   //root reducer and rduer
  // cake and slice 

  reducer: {
    counter: counterReducer,
    todos: todoReducer,
  },
});