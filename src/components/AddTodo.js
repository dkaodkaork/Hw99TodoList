import React, { useState } from "react";
import CustomButton from "./CustomButton";

function AddTodo({ todos, setTodos }) {
  // console.log(props);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addTodoHandler = () => {
    const newTodo = {
      id: todos.length + 1,
      title: title,
      body: body,
      isDone: false,
    };

    if (title && body) {
      setTodos([...todos, newTodo]);
    }
  };

  return (
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
  );
}

export default AddTodo;
