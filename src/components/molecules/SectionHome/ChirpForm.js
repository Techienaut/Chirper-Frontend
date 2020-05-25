import React, { useEffect } from "react";
import "./a_styles/ChirpForm.css";
const profilePic =
  "https://res.cloudinary.com/techienaut/image/upload/v1587372249/Chirper/comment_avatar_ccerz8.png";
const placeholder = "What’s happening?";
function ChirpForm(props) {
  useEffect(() => {
    const textareaGrowScript = document.createElement("script");
    textareaGrowScript.src = "./textareaGrowScript.js";
    textareaGrowScript.async = true;
    document.body.appendChild(textareaGrowScript);
    return () => {
      document.body.removeChild(textareaGrowScript);
    };
  }, []);
  return (
    <form className="chirp-form">
      <div className="icon">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="body">
        <textarea
          className="chirp-form-body"
          placeholder={placeholder}
        ></textarea>
      </div>
      <div className="submit-area">
        <button className="submit-btn color-dodger-blue">Chirp</button>
      </div>
    </form>
  );
}
export default ChirpForm;
