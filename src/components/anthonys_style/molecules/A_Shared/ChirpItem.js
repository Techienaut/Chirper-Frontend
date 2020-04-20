import React from "react";
import "./a_styles/ChirpItem.css";
const image = "https://res.cloudinary.com/techienaut/image/upload/v1587372249/Chirper/comment_avatar_ccerz8.png"
const username = '@egoraptor'
const time = '2:23pm'
const date = 'Apr 8'
const body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
const commentIcon = "https://res.cloudinary.com/techienaut/image/upload/v1587373013/Chirper/comment_icon_prvdco.png"
const commentNum = 117
const likeIcon = 'https://res.cloudinary.com/techienaut/image/upload/v1587373217/Chirper/like_icon_ybliqy.png'
const likeNum = 6
function ChirpItem(props) {
  return (
    <div className="chirp-item">
      <div className="icon-div">
        <img src={image} alt="" srcset="" />
      </div>
      <div className="header-div">
        <span>{username}</span>
        <span>{time}</span>
        <span>&nbsp;·&nbsp;</span>
        <span>{date}</span>
      </div>
      <div className="body-div">
        <p>{body}</p>
      </div>
      <div className="nums-div">
        <img src={commentIcon} alt="" srcset="" />
        <span>{commentNum}</span>
        <img src={likeIcon} alt="" srcset="" />
        <span>{likeNum}</span>
      </div>
      <div className="context-div">
        <img src="https://res.cloudinary.com/techienaut/image/upload/v1587373423/Chirper/context_button_repobe.png" alt="" srcset="" />
      </div>
    </div>
  )
}

export default ChirpItem;
