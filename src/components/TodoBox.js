import React, { useState } from "react";
import Todo from "./Todo";

function TodoBox({ todos, setTodos }) {
  // console.log(props)
  // const [isDone, setIsDone] = useState(false);

  const deleteTodoHandler = (id) => {
    const newTodoList = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoList);
  };

  const doneTodoHandler = (id) => {
    const doneTodo = todos.map((todo) => {
      //  setIsDone(!isDone);   true    setstate는 비동기적으로 일어난다. 바로 일어나지않으므로 다음스텝을 생각해서 코드를 작성하자, 상태관리는 꼭해야될것만 하자
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone, // isDone:isDone  false => false => true
        };
      } else {
        return {
          ...todo,
        };
      }
    });
    setTodos(doneTodo);
    // console.log("확인");
  };

  return (
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
                key={todo.id}
              ></Todo> // key를 넣지 않고 하면 모든 차일드는 unique한 key값을 props로 갖어야한다. 리액트에서는 맵을 사용해서 컴포넌트를 반복 랜더링 할때 반드시 컴포넌트의 키를 넣어주어야한다
            ); // 키가 필요한 이유는 리액트에서 컴포넌트 배열을 렌더링 할 때 각각의 원소에서 변동이 있는지 알아내려고 사용하기 때문. 키값을 넣어줘야, 리액트의 성능이 최적화된다.
          } else {
            // 키가 없다면 리액트는 가상 Dom을 비교한는 과정에서 배열을 순차적으로 비교하면서 변화를 감지한다. => 성능 저하, 키는 props처럼 생겼지만 props로 설정하지 않아도 넣을 수 있다.
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
                key={todo.id}
              ></Todo>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default TodoBox;
