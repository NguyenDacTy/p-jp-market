import React from "react";
import "./style.css";
import HeaderComponent from "../../components/HeaderComponent";
import FooterComponent from "../../components/FooterComponent";
import LoginPage from "./Login";

const Acount = () => {
  return (
    <div>
      <HeaderComponent />
      <div className="acount-container">
        <LoginPage />
      </div>
      <FooterComponent />
    </div>
  );
};

export default Acount;
