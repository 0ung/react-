import React from "react";

function MyButton(props) {
  const handleDelete = (id, event) => {
    console.log(id, event.target);
    event.target.disabled = "false";
  };
  return (
    <div>
      이거는?
      <button
        onClick={(event) => {
          handleDelete(1, event);
        }}
      >
        삭제하기
      </button>
    </div>
  );
}

export default MyButton;
