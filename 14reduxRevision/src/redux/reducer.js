import { createReducer } from "@reduxjs/toolkit";

export const firstReducer = createReducer(
  { coins: [] },
  {
    humaraFirstCase: (state, action) => {
      // console.log(action.payload);
      state.coins = action.payload;
    },
  }
);
