import React, { useState } from "react";
import "./Todo.scss";
import { CSSTransition, TransitionGroup } from "react-transition-group";
const Todo = ({ id, task, completed, toggleTodo, removeTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState(task);
  const handleUpdate = (e) => {
    e.preventDefault();
    // updateTodo here
    updateTodo(id, editTask);
    setIsEditing(false);
  };
  return (
    <TransitionGroup className={completed ? "Todo completed" : "Todo"}>
      {isEditing ? (
        <CSSTransition classNames="form" key="editing" timeout={500}>
          <form className="todo-edit-form" onSubmit={handleUpdate}>
            <input
              type="text"
              value={editTask}
              name="task"
              onChange={(e) => setEditTask(e.target.value)}
            ></input>
            <button type="submit">Save</button>
          </form>
        </CSSTransition>
      ) : (
        <CSSTransition classNames="task-text" key="normal" timeout={500}>
          <li className="Todo-task" onClick={toggleTodo}>
            {task}
          </li>
        </CSSTransition>
      )}

      <div className="Todo-buttons">
        <button onClick={() => setIsEditing(true)}>
          <i className="fas fa-pen"></i>
        </button>
        <button onClick={removeTodo}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </TransitionGroup>
  );
};

export default Todo;
