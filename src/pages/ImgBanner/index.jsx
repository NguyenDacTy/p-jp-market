import React from "react";
import "./style.css";
import bestSeller from "../../img-banner/bestSeller.png";
import hotBrand from "../../img-banner/hotBrand.png";
import favouriteCombo from "../../img-banner/hotCombo.png";
import newProd from "../../img-banner/newProd.png";
import heigthPlus from "../../img-banner/tangChieuCao.png";
import tpcn from "../../img-banner/tpcn.png";
import { ROUTES } from "../../const/routes";
import { Link } from "react-router-dom";

const ImgBanner = () => {
  return (
    <div className="container-banner">
      <div className="img-banner-container">
        <div className="banner-group">
          <Link to={ROUTES.BEST_SELLER}>
            <img src={bestSeller} />
          </Link>
        </div>
        <div className="banner-group">
          <Link to={ROUTES.HOT_BRAND}>
            <img src={hotBrand} />
          </Link>
        </div>
        <div className="banner-group">
          <Link to={ROUTES.HOT_COMBO}>
            <img src={favouriteCombo} />
          </Link>
        </div>
        <div className="banner-group">
          <Link to={ROUTES.POTION_PRODUCT}>
            <img src={tpcn} />
          </Link>
        </div>
        <div className="banner-group">
          <Link to={ROUTES.HEIGHT_PLUS}>
            <img src={heigthPlus} />
          </Link>
        </div>
        <div className="banner-group">
          <Link to={ROUTES.NEW_PRODUCT}>
            <img src={newProd} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImgBanner;
