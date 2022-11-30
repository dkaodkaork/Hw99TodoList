import React, { useState, useSyncExternalStore } from "react";
import "./App.css";
import Header from "./components/Header";
import CustomButton from "./components/CustomButton";
import TodoBox from "./components/TodoBox";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "리액트공부", body: "리액트 어려워요", isDone: false },
    { id: 2, title: "리액트공부", body: "리액트 질문있어요", isDone: true },
  ]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addTodoHandler = () => {
    const newTodo = {
      id: todos.length + 1,
      title: title,
      body: body,
      isDone: false,
    };
    if (title && body !== "") {
      //제목과 내용이 입력되면 todos의 상태변경
      setTodos([...todos, newTodo]);
    }
  };

  return (
    <div className="layout">
      <Header />
      <div className="add-style">
        <div className="inputbox-style">
          <label className="label-style">제목</label>
          <input
            value={title}
            className="input-style"
            placeholder="제목을 입력하세요"
            // 인풋 이벤트로 들어온 입력 값을 title의 값으로 업데이트
            onChange={(e) => setTitle(e.target.value)}
          />
          <label className="label-style">내용</label>
          <input
            value={body}
            className="input-style"
            placeholder="내용을 입력하세요"
            // 인풋 이벤트로 들어온 입력 값을 body의 값으로 업데이트 상태값 추가해야함
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <CustomButton
          backgroundcolor="#76c4b5"
          onClick={addTodoHandler}
          name="추가!"
        />
      </div>
      <TodoBox todos={todos} setTodos={setTodos}></TodoBox>
    </div>
  );
};

export default App;
