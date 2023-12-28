import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import Library from "./chapter_03/Library";
// import ConfirmDialog from "./chapter_03/ConfirmDialog";
import Tick from "./chapter_03/Tick";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // 배포할때는 삭제하고 배포해야됨, 마운트를 두번 진행
  <React.StrictMode>
    <Tick></Tick>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
