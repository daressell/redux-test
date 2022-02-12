import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
//asdkjhaskjdasd
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
