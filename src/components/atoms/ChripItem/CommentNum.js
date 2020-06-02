import React from "react";
import "./a_styles/CommentNum.css";

function CommentNum(props) {
  let commentNumColor = "var(--lynch)";
  let callOnMouseEnter = props.onMouseEnter || function () {};
  let callOnMouseLeave = props.onMouseLeave || function () {};
  if (props.hover) {
    commentNumColor = "var(--dodger-blue)";
  }
  return (
    <span
      className="comment-num"
      onMouseEnter={callOnMouseEnter}
      onMouseLeave={callOnMouseLeave}
      style={{ color: commentNumColor }}
    >
      {props.commentNum}
    </span>
  );
}
export default CommentNum;
