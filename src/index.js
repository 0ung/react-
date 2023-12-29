import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
//
// import ConfirmDialog from "./chapter_03/ConfirmDialog";
// import Tick from "./chapter_03/Tick";
// import Library from "./chapter_03/Library";
// import App from "./App";
// import Welcome from "./chapter_05/Welcome";
// import Comment from "./chapter_05/Comment";
// import CommentList from "./chapter_05/CommentList";
// import NotificationList from "./chapter_06/NotificationList";
// import Counter from "./chapter_07/Counter";
// import HookTest from "./chapter_07/HookTest";
// import TextInput from "./chapter_07/TextInputWithFocusButton";
// import MeasureExample from "./chapter_07/MeasureExample";
// import Accommodate from "./chapter_07/Accommodate";
// import MyButton from "./chapter_08/MyButton";
import ConfirmButton from "./chapter_08/ConfirmButton";
import ConfirmBtn from "./chapter_08/ConfrimBtn";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // 배포할때는 삭제하고 배포해야됨, 마운트를 두번 진행
  <ConfirmBtn />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// eslint-disable-next-line

reportWebVitals();
