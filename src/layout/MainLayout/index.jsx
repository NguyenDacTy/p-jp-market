import React from "react";
import "./style.css";
import HeaderComponent from "../../components/HeaderComponent";
import { Outlet } from "react-router-dom";
import Slideshow from "../../pages/SlideShow";
import ImgBanner from "../../pages/ImgBanner";
import FooterComponent from "../../components/FooterComponent";
import MainBanner from "../../pages/MainBanner";

const MainLayout = (props) => {
  return (
    <div className="container-main">
      <div className="header-component">
        <HeaderComponent {...props} />
      </div>
      <div className="slide-show">
        <Slideshow />
      </div>
      <div>
        <ImgBanner />
      </div>
      <div>
        <MainBanner />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <FooterComponent />
      </div>
    </div>
  );
};

export default MainLayout;
