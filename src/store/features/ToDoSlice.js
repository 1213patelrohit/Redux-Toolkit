import { createAction } from '@reduxjs/toolkit';

export const updateToDo = createAction('todo/updateToDo');

// In your reducer:
[updateToDo]; (state, action) => {
  const { id, text } = action.payload;
  const todoToUpdate = state.todos.find(todo => todo.id === id);
  if (todoToUpdate) {
    todoToUpdate.text = text;
  }
}