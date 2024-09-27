import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/redux/counter/CounterSlice";

const store = configureStore({
  reducer: {
    // states merged
    counter: counterReducer,
  },
});

export default store;