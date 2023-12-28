import React from "react";
import Btn from "./Btn";

function Tick(props) {
  return (
    <div>
      <h1>안녕, 리액트</h1>
      <h2>현재 시간 {new Date().toLocaleTimeString()}</h2>
      <Btn color="primary">확인</Btn>
    </div>
  );
}

export default Tick;
