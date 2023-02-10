import React, { useState } from "react";
import "./TodoInput.scss";
const TodoInput = ({ createTodo }) => {
  const [task, setTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(task);
    setTask("");
  };
  return (
    <form className="todoInput" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        id="task"
        value={task}
        name="task"
        onChange={(e) => setTask(e.target.value)}
      ></input>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoInput;
