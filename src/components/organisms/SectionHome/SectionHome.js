import React from "react";
import "./SectionHome.css";
import ChirpFeed from "../../molecules/A_Shared/ChirpFeed";

function SectionHome() {
  return (
    <div className="section-home">
      <div className="seperator color-solitude"></div>
      <ChirpFeed />
    </div>
  );
}

export default SectionHome;
