import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ChirpFeed from "./components/molecules/A_Shared/ChirpFeed";
import SectionHome from "./components/organisms/SectionHome/SectionHome";
import PageMain from "./components/pages/PageMain/PageMain";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
      <PageMain />
    </div>
  );
}

export default App;
