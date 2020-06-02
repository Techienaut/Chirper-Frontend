import React from "react";
import "./a_styles/ChirpFeed.css";
import ChirpItem from "./ChirpItem";
const chirpItems = [
  {
    profilePic:
      "https://res.cloudinary.com/techienaut/image/upload/v1587372249/Chirper/comment_avatar_ccerz8.png",
    username: "@egoraptor",
    time: "2:23pm",
    date: "Apr 8",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    commentNum: 117,
    likeNum: 6,
  },
  {
    profilePic:
      "https://res.cloudinary.com/techienaut/image/upload/v1587372249/Chirper/comment_avatar_ccerz8.png",
    username: "@egoraptor",
    time: "2:23pm",
    date: "Apr 8",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    commentNum: 117,
    likeNum: 6,
  },
  {
    profilePic:
      "https://res.cloudinary.com/techienaut/image/upload/v1587372249/Chirper/comment_avatar_ccerz8.png",
    username: "@egoraptor",
    time: "2:23pm",
    date: "Apr 8",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    commentNum: 117,
    likeNum: 6,
  },
];
function ChirpFeed() {
  let chripFeedRender = chirpItems.map((chirpItem, index) => {
    // console.log({ ...chirpItem });
    return <ChirpItem {...chirpItem} key={index} />;
  });
  return chripFeedRender;
}
export default ChirpFeed;
