import React, { useState, useSyncExternalStore } from "react";
import "./App.css";
import Header from "./components/Header";
import CustomButton from "./components/CustomButton";
import Todo from "./components/Todo";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "리액트공부", body: "리액트 어려워요", isDone: false },
    { id: 2, title: "리액트공부", body: "리액트 질문있어요", isDone: true },
  ]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isDone, setIsDone] = useState(false);

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

  const deleteTodoHandler = (id) => {
    const newTodoList = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoList);
  }; //delete를 핸들할 꺼면 이런이름을 써라 하고 props로 사용할 곳에 핸들러를 넘겨줘야한다

  const doneTodoHandler = (id) => {
    // setIsDone(!isDone);
    //https://ko.reactjs.org/docs/faq-state.html setState 2회
    const doneTodo = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone, //!todo.isDone,
        };
      } else {
        return {
          ...todo,
        };
      }
    });
    setTodos(doneTodo);
    console.log("왜잘안찍히나요..");
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

      <div className="app-style">
        <div>
          <h2>Working..🔥</h2>
        </div>

        <div className="box-style">
          {todos.map((todo) => {
            if (!todo.isDone) {
              // isdone의 false이면 위쪽에띄어주고 아니면 null
              return (
                <Todo
                  handleDelte={deleteTodoHandler}
                  doneTodo={doneTodoHandler}
                  todo={todo}
                  key={todo.id} // key를 넣지 않고 하면 모든 차일드는 unique한 key값을 props로 갖어야한다. 리액트에서는 맵을 사용해서 컴포넌트를 반복 랜더링 할때 반드시 컴포넌트의 키를 넣어주어야한다
                ></Todo> // 키가 필요한 이유는 리액트에서 컴포넌트 배열을 렌더링 할 때 각각의 원소에서 변동이 있는지 알아내려고 사용하기 때문. 키값을 넣어줘야, 리액트의 성능이 최적화된다.
              ); // 키가 없다면 리액트는 가상 Dom을 비교한는 과정에서 배열을 순차적으로 비교하면서 변화를 감지한다. => 성능 저하, 키는 props처럼 생겼지만 props로 설정하지 않아도 넣을 수 있다.
            } else {
              return null;
            }
          })}
        </div>

        <div>
          <h2>Done..!🎉</h2>
        </div>

        <div className="box-style">
          {todos.map((todo) => {
            if (todo.isDone) {
              return (
                <Todo
                  handleDelte={deleteTodoHandler}
                  doneTodo={doneTodoHandler}
                  todo={todo}
                  key={todo.id} // key를 넣지 않고 하면 모든 차일드는 unique한 key값을 props로 갖어야한다. 리액트에서는 맵을 사용해서 컴포넌트를 반복 랜더링 할때 반드시 컴포넌트의 키를 넣어주어야한다
                ></Todo> // 키가 필요한 이유는 리액트에서 컴포넌트 배열을 렌더링 할 때 각각의 원소에서 변동이 있는지 알아내려고 사용하기 때문. 키값을 넣어줘야, 리액트의 성능이 최적화된다.
              ); // 키가 없다면 리액트는 가상 Dom을 비교한는 과정에서 배열을 순차적으로 비교하면서 변화를 감지한다. => 성능 저하, 키는 props처럼 생겼지만 props로 설정하지 않아도 넣을 수 있다.
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
