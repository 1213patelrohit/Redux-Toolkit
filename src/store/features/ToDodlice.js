import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const ToDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteToDo: (state, action) => {
        state.todos= state.todos.filter((todo)=>todo.id !== action.payload);

    },
    clearToDo: (state, action) => {
        state.todos=[]
    },
  },
});
export const { addToDo, deleteToDo, clearToDo } = ToDoSlice.actions;
export default ToDoSlice.reducer;
