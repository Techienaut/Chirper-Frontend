import React from "react";
import "./SectionHome.css";
import ChirpFeed from "../../molecules/A_Shared/ChirpFeed";
import ChirpForm from "../../molecules/SectionHome/ChirpForm";
import BackToolbar from "../../molecules/A_Shared/BackToolbar";

function SectionHome() {
  return (
    <div className="section-home">
      <BackToolbar />
      <ChirpForm />
      <div className="seperator color-solitude"></div>
      <ChirpFeed />
    </div>
  );
}

export default SectionHome;
