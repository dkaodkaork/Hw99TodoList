import React, { useState } from "react";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="container">
        <div>My Todo List</div>
        <div>React</div>
      </div>

      <div className="add-style">
        <div className="inputbox-style">
          <label>제목</label>
          <input
            className="input-style"
            placeholder="제목을 입력하세요"
          ></input>
          <label>내용</label>
          <input
            className="input-style"
            placeholder="내용을 입력하세요"
          ></input>
        </div>

        <button className="button-style">추가하기</button>
      </div>

      <div className="app-style">
        <div>
          <h2>Working..🔥</h2>
        </div>

        <div className="box-style">
          <div className="square-style">
            <div>
              <h2>리액트 공부하기</h2>
              리액트 기초를 공부해 봅시다.
            </div>

            <div className="button-box">
              <button className="button-style">삭제하기</button>
              <button className="button-style">완료</button>
            </div>
          </div>
        </div>

        <div>
          <h2>Done..!🎉</h2>
        </div>

        <div className="box-style">
          <div className="square-style">
            <div>
              <h2>리액트 공부하기</h2>
              <div>리액트 기초를 공부해 봅시다.</div>
            </div>

            <div className="button-box">
              <button className="button-style">삭제하기</button>
              <button className="button-style">취소</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
