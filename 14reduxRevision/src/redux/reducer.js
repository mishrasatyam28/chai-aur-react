import { createReducer } from "@reduxjs/toolkit";

export const firstReducer = createReducer(
  { coins: [], counter: 0 },
  {
    // humaraFirstCase: (state, action) => {
    //   // console.log(action.payload);
    //   state.coins = action.payload;
    // },

    incrementCase: (state) => {
      state.counter += 1;
    },
    decrementCase: (state) => {
      state.counter -= 1;
    },
  }
);
