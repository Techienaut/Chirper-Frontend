import React, { useState, useEffect, useReducer } from "react";
import "./a_styles/ChirpItem.css";
import LikeMeter from "../ChirpItem/LikeMeter";
import CommentMeter from "../ChirpItem/CommentMeter";
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
function ChirpItem(props) {
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
        <CommentMeter commentNum={props.commentNum} />
        <LikeMeter likeNum={props.likeNum} />
      </div>
      <div className="context-div">
        <img className="context-icon" src={contextIcon} alt="" />
      </div>
      <div className="bottom-border color-solitude"></div>
    </div>
  );
}

export default ChirpItem;
