import React, { useState, useEffect } from "react";
import "./a_styles/LikeMeter.css";
import LikeIcon from "../../atoms/ChripItem/LikeIcon";
let defaultLikeNum = function (propsLikeNum) {
  if (propsLikeNum === undefined) {
    return 0;
  } else {
    return propsLikeNum;
  }
};
function LikeMeter(props) {
  const [likeNum, setLikeNum] = useState(defaultLikeNum(props.likeNum));
  const [isHoverLike, setHoverLike] = useState(false);
  const [likeNumColor, setLikeNumColor] = useState("var(--lynch)");
  const [isClickLike, setClickLike] = useState(false);
  const [isIncrementLike, setIncrementLike] = useState(true);
  useEffect(() => {
    if (isHoverLike) {
      setLikeNumColor("var(--cerise)");
    } else if (isClickLike) {
      setLikeNumColor("var(--cerise)");
    } else {
      setLikeNumColor("var(--lynch)");
    }
  }, [isHoverLike]);
  useEffect(() => {
    if (isClickLike) {
      setLikeNumColor("var(--cerise)");
    } else if (isHoverLike) {
      setLikeNumColor("var(--cerise)");
    } else {
      setLikeNumColor("var(--lynch)");
    }
  }, [isClickLike]);
  let handleClickLike = function () {
    setClickLike(!isClickLike);
    setLikeNum(isIncrementLike ? likeNum + 1 : likeNum - 1);
    setIncrementLike(!isIncrementLike);
  };
  return (
    <div className="like-meter">
      <LikeIcon
        onMouseEnter={() => setHoverLike(true)}
        onMouseLeave={() => setHoverLike(false)}
        onClick={handleClickLike}
        hover={isHoverLike}
        clicked={isClickLike}
      />
      <span
        className="like-num color-lynch"
        style={{ color: likeNumColor }}
        onMouseEnter={() => setHoverLike(true)}
        onMouseLeave={() => setHoverLike(false)}
        onClick={handleClickLike}
      >
        {likeNum}
      </span>
    </div>
  );
}

export default LikeMeter;
