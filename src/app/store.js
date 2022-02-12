import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
//asdkjhas
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
