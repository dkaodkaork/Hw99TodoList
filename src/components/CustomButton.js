function CustomButton({ backgroundcolor, onClick, name }) {
  // console.log(props);
  return (
    <button
      style={{
        backgroundColor: backgroundcolor,
      }}
      className="button-style"
      onClick={onClick}
    >
      {name}
    </button>
  );
} // props로 온클릭이라는 것을 받아 왔고, props의 칠드런 {}사이의 값을 칠드런으로 받는다.

export default CustomButton;
