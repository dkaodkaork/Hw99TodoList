function AddTodo() {
  return (
    <div className="add-style">
      <div className="inputbox-style">
        <label>제목</label>
        <input className="input-style" placeholder="제목을 입력하세요"></input>
        <label>내용</label>
        <input className="input-style" placeholder="내용을 입력하세요"></input>
      </div>

      <button className="button-style">추가하기</button>
    </div>
  );
}

export default AddTodo;
