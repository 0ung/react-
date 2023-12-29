import React, { useRef } from "react";

function TextInput(props) {
  const inputELem = useRef(null);

  const onButtonClick = () => {
    inputELem.current.focus();
    console.log(inputELem.current);
  };

  return (
    <>
      <input ref={inputELem} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

export default TextInput;
