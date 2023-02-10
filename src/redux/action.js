import * as types from "./type";
export const completeTodo = (todo) => ({
  type: types.COMPLETE_TODO,
  payload: todo,
});
export const addTodos = (todo) => ({
  type: types.ADD_TODO,
  payload: todo,
});
export const deleteTodo = (todo) => ({
  type: types.DELETE_TODO,
  payload: todo,
});
export const updateTodo = (todo) => ({
  type: types.UPDATE_TODO,
  payload: todo,
});
