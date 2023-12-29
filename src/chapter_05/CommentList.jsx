import React from "react";
import Comment from "./Comment";

const comments = [
  { id: "이인제", cmmnt: "반가워요?" },
  { id: "?인제", cmmnt: "반가워요!" },
  { id: "이인?", cmmnt: "반가워요@" },
  { id: "이?제", cmmnt: "반가워요#" },
  { id: "굴인제", cmmnt: "반가워요$" },
  { id: "이인굴", cmmnt: "반가워요%" },
  { id: "이굴제", cmmnt: "반가워요^" },
  { id: "이굴굴", cmmnt: "반가워요&" },
  { id: "굴굴제", cmmnt: "반가워요*" },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((e) => {
        return <Comment name={e.id} comments={e.cmmnt}></Comment>;
      })}
    </div>
  );
}

export default CommentList;
