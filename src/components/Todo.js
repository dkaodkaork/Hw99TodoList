import CustomButton from "./CustomButton";
import TodoBox from "./TodoBox";

function Todo({ todo, handleDelte, doneTodo }) {
  // console.log(props);
  return (
    <div className="square-style">
      <div>
        <h2>{todo.title}</h2>
        <div>{todo.body}</div>
      </div>
      <div className="button-box">
        <CustomButton
          backgroundcolor="#e35d5b"
          onClick={() => handleDelte(todo.id)}
          name="삭제!"
        />
        <CustomButton
          backgroundcolor={todo.isDone ? "#434343" : "#4b6cb7"}
          onClick={() => {
            doneTodo(todo.id);
          }}
          name={todo.isDone ? "취소" : "완료"}
        />
      </div>
    </div>
  );
}
export default Todo;
