import React from "react";
import TodoInput from "../TodoInput/TodoInput";
import "./TodoList.scss";
import Todo from "../Todo/Todo";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import {
  completeTodo,
  addTodos,
  deleteTodo,
  updateTodo,
} from "../../redux/action";
const TodoList = () => {
  const state = useSelector((state) => ({
    ...state.todos,
  }));
  const dispatch = useDispatch();
  const handleToggleTodo = (item) => {
    dispatch(completeTodo(item));
  };
  const handleAddNewTodo = (newTodo) => {
    //check if the input is empty
    if (newTodo === "") {
      return;
    }
    dispatch(addTodos(newTodo));
  };
  const handleDeleteTodo = (todo) => {
    dispatch(deleteTodo(todo));
  };
  const handleUpdateTodo = (id, updateTask) => {
    dispatch(
      updateTodo({
        id,
        updateTask,
      })
    );
  };
  return (
    <div className="todo-list">
      <h1>Todo App With Redux</h1>
      <TodoInput
        createTodo={
          //add todo
          handleAddNewTodo
        }
      />
      <ul>
        <TransitionGroup className="">
          {state.todos &&
            state.todos.map((item) => (
              <CSSTransition classNames="todo" key={item.id}>
                <Todo
                  id={item.id}
                  task={item.task}
                  completed={item.completed}
                  toggleTodo={
                    //toggle todo completed
                    () => handleToggleTodo(item)
                  }
                  removeTodo={() => handleDeleteTodo(item)}
                  updateTodo={
                    //update todo
                    handleUpdateTodo
                  }
                />
              </CSSTransition>
            ))}
        </TransitionGroup>
      </ul>
    </div>
  );
};

export default TodoList;
