import React, { Children } from "react";
import Btn from "../chapter_03/Btn";
function Welcome(props) {
  return (
    <h1 class={props.class}>
      안녕, {props.name}
      <Btn color="primary">
        <div></div>
      </Btn>
    </h1>
  );
}

export default Welcome;
