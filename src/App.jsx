import React, { useState, useSyncExternalStore } from "react";
import "./App.css";
import Header from "./components/Header";
import CustomButton from "./components/CustomButton";
import TodoBox from "./components/TodoBox";
import AddTodo from "./components/AddTodo";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "리액트공부", body: "리액트 어려워요", isDone: false },
    { id: 2, title: "리액트공부", body: "리액트 질문있어요", isDone: true },
  ]);

  return (
    <div className="layout">
      <Header />
      <AddTodo todos={todos} setTodos={setTodos} />
      <TodoBox todos={todos} setTodos={setTodos}></TodoBox>
    </div>
  );
};

export default App;
