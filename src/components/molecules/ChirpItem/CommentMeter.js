import React, { useState } from "react";
import "./a_styles/CommentMeter.css";
import CommentIcon from "../../atoms/ChripItem/CommentIcon";
import CommentNum from "../../atoms/ChripItem/CommentNum";
let defaultCommentNum = function (propsCommentNum) {
  if (propsCommentNum === undefined) {
    return 0;
  } else {
    return propsCommentNum;
  }
};
function CommentMeter(props) {
  const [isHoverComment, setHoverComment] = useState(false);
  return (
    <div className="comment-meter">
      <CommentIcon
        onMouseEnter={() => setHoverComment(true)}
        onMouseLeave={() => setHoverComment(false)}
        hover={isHoverComment}
      />
      <CommentNum
        commentNum={props.commentNum}
        onMouseEnter={() => setHoverComment(true)}
        onMouseLeave={() => setHoverComment(false)}
        hover={isHoverComment}
      />
    </div>
  );
}
export default CommentMeter;
