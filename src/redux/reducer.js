import * as types from "./type";
import { v4 as uuidv4 } from "uuid";
const INITIAL_STATE = {
  todos: [],
};
const todoReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.ADD_TODO: {
      const newTodo = {
        id: uuidv4(),
        task: payload,
        completed: false,
      };
      const addTodos = [...state.todos, newTodo];
      return {
        ...state,
        todos: addTodos,
      };
    }
    case types.COMPLETE_TODO: {
      const toggleTodos = state.todos.map((todo) => {
        if (todo.id === payload.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      return {
        ...state,
        todos: toggleTodos,
      };
    }
    case types.DELETE_TODO: {
      const deleteTodos = state.todos.filter((todo) => todo.id !== payload.id);

      return {
        ...state,
        todos: deleteTodos,
      };
    }
    case types.UPDATE_TODO: {
      const updateTodos = state.todos.map((todo) => {
        if (todo.id === payload.id) {
          return {
            ...todo,
            task: payload.updateTask,
          };
        }
        return todo;
      });
      return {
        ...state,
        todos: updateTodos,
      };
    }
    default:
      return state;
  }
};
export default todoReducer;
