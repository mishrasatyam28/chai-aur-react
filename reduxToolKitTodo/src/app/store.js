import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

// phle store bnate hai
// fir reducer bnate hain
export const store = configureStore({
  reducer: todoReducer,
});
