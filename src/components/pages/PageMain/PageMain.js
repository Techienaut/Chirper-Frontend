import React from "react";
import "./PageMain.css";
import "../../organisms/SectionHome/SectionHome";
import SectionHome from "../../organisms/SectionHome/SectionHome";
import LeftNav from "../../organisms/A_Shared/LeftNav";

function PageMain() {
  return (
    <div className="page-main">
      <div className="nav">
        <LeftNav />
      </div>
      <div className="seperator-left color-solitude"></div>
      <div className="content">
        <SectionHome />
      </div>
      <div className="seperator-right color-solitude"></div>
      <div className="right-section"></div>
    </div>
  );
}

export default PageMain;
