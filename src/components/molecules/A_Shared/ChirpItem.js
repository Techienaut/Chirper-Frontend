import React, { useState, useEffect, useReducer } from "react";
import "./a_styles/ChirpItem.css";
import LikeIcon from "../../atoms/ChripItem/LikeIcon";
const profilePic =
  "https://res.cloudinary.com/techienaut/image/upload/v1587372249/Chirper/comment_avatar_ccerz8.png";
const username = "@egoraptor";
const time = "2:23pm";
const date = "Apr 8";
const body =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ";
const commentIcon =
  "https://res.cloudinary.com/techienaut/image/upload/v1587373013/Chirper/ChripItem/comment_icon_prvdco.png";
const commentNum = 117;
const likeIcon =
  "https://res.cloudinary.com/techienaut/image/upload/v1587373217/Chirper/ChripItem/like_icon_ybliqy.png";
const likeNum = 6;
const contextIcon =
  "https://res.cloudinary.com/techienaut/image/upload/v1590375851/Chirper/ChripItem/Context_dqou7q.png";
let defaultLikeNum = function (propsLikeNum) {
  if (propsLikeNum === undefined) {
    return 0;
  } else {
    return propsLikeNum;
  }
};
// let reducerLikeNum = function (state, action) {
//   return state;
// };
function ChirpItem(props) {
  // const [likeNum, dispatchLikeNum] = useReducer(
  //   reducerLikeNum,
  //   defaultLikeNum(props.likeNum)
  // );
  // const [incrementLikeNum, setIncrementLikeNum] = useState(true);
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
    <div className="chirp-item">
      <div className="icon-div">
        <img className="profile-pic" src={props.profilePic} alt="" />
      </div>
      <div className="header-div">
        <span className="username color-lynch">{props.username}</span>
        <span className="time color-lynch">{props.time}</span>
        <span className="color-lynch">&nbsp;·&nbsp;</span>
        <span className="date color-lynch">{props.date}</span>
      </div>
      <div className="body-div">
        <p className="body-chirp">{props.body}</p>
      </div>
      <div className="nums-div">
        <i className="comment-icon fa fa-comment-o"></i>.
        <span className="comment-num color-lynch">{props.commentNum}</span>
        {/* <i className="like-icon fa fa-heart-o"></i> */}
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
      <div className="context-div">
        <img className="context-icon" src={contextIcon} alt="" />
      </div>
      <div className="bottom-border color-solitude"></div>
    </div>
  );
}

export default ChirpItem;
