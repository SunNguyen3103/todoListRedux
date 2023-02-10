import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import './App.css'
import { useSelector } from "react-redux";
import TodoList from "./components/TodoList/TodoList";
function App() {
  // const [count, setCount] = useState(0);
  const state = useSelector((state) => ({
    ...state,
  }));
  console.log("state", state);
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
