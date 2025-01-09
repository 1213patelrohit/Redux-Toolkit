import { configureStore } from "@reduxjs/toolkit";
import ToDoSlice from "./features/ToDodlice";

export const store = configureStore({
     reducer:{
         todo: ToDoSlice
     }
})
 