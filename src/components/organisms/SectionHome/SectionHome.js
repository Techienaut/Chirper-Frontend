import React from "react";
import "./SectionHome.css";
import ChirpFeed from "../../molecules/A_Shared/ChirpFeed";
import ChirpForm from "../../molecules/SectionHome/ChirpForm";

function SectionHome() {
  return (
    <div className="section-home">
      <ChirpForm />
      <div className="seperator color-solitude"></div>
      <ChirpFeed />
    </div>
  );
}

export default SectionHome;
