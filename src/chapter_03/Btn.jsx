import React from "react";

function Btn(props) {
  return (
    <button className={`btn btn-${props.color} btn-lg`}>
      {`${props.color}`}
      <br />
      <b>{props.children}</b>
    </button>
  );
}

export default Btn;
