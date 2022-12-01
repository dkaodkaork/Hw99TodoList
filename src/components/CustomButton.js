function CustomButton({ backgroundcolor, onClick, name }) {
  // console.log(props)
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
}

export default CustomButton;
