import React from "react";
import "./style.css";
import HeaderComponent from "../../../components/HeaderComponent";
import FooterComponent from "../../../components/FooterComponent";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../const/routes";
import hotBrandBanner from "../../../img-banner/hotbrand-title-banner.png";
import productImg from "../../../product-img/taoxoan.jpg";

const HotBrand = () => {
  return (
    <div>
      <HeaderComponent />
      <div className="hotBrand-container">
        <div className="title-banner">
          <Link to={ROUTES.HOT_BRAND}>
            <img src={hotBrandBanner} className="title-banner-img" />
          </Link>
        </div>
        <div className="item-product">
          <div className="item-product__box-img">
            <a title="Tảo xoắn Spirulina Japan Algae Nhật Bản 2200 viên">
              <img
                src={productImg}
                alt="Tảo xoắn Spirulina Japan Algae Nhật Bản 2200 viên"
              />
            </a>
          </div>
          <div className="item-product__detail">
            <h5 className="item-product__detail-title">
              Tảo xoắn Spirulina Japan Algae Nhật Bản 2200 viên
            </h5>
            <div
              className="item-product__detail-price"
              style={{ display: "flex" }}
            >
              <p className="price">449.000 đ</p>
              <p className="old-price">
                <strike>469.000 đ</strike>
              </p>
            </div>
            <div className="detail-price__btn">
              <button className="detail-price__btn-add">Add to Cart</button>
              <Link to={ROUTES.CART}>
                <button className="detail-price__btn-buy">Buy Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default HotBrand;
