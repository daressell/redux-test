import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counter2Slice = createSlice({
  name: "counter2",
  initialState,
  reducers: {
    increment2: (state) => {
      state.value += 1;
    },
    decrement2: (state) => {
      state.value -= 1;
    },
    incrementByAmount2: (state, action) => {
      console.log("state action >>>>> ", state, action);
      state.value += action.payload.save;
    },
  },
});

export const { increment2, decrement2, incrementByAmount2 } = counter2Slice.actions;

export const selectCount2 = (state) => {
  console.log(state);
  return state.counter2.value;
};

export default counter2Slice.reducer;
