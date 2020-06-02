import React from "react";
import "./LeftNav.css";

let profilePic =
  "https://res.cloudinary.com/techienaut/image/upload/v1587372249/Chirper/comment_avatar_ccerz8.png";
function LeftNav(props) {
  return (
    <div className="left-nav">
      <nav>
        <ul>
          <li>
            <img
              className="home-icon"
              src="https://res.cloudinary.com/techienaut/image/upload/v1590022951/Chirper/LeftNav/home-icon_rbu5su.png"
              alt=""
            />
            <span className="label">Home</span>
          </li>
          <li className="li-profile">
            <img className="profile-pic" src={profilePic} alt="" />
            <span className="label">Profile</span>
          </li>
        </ul>
        <button className="chirp-btn color-dodger-blue">Chirp</button>
      </nav>
    </div>
  );
}

export default LeftNav;
