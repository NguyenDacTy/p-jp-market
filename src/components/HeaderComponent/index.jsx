import React from "react";
import "./style.css";
import logo from "../../img/logo/JPM-logo.png";
import { Input } from "antd";
import {
  ShoppingCartOutlined,
  UserOutlined,
  SearchOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import { ROUTES } from "../../const/routes";

const HeaderComponent = () => {
  return (
    <div className="container container-fake">
      <div className="header">
        <div className="header-baner">
          <Link to={ROUTES.ALL_PRODUCT}>
            <img
              className="header-baner__logo"
              src={logo}
              title="Japan Market"
            />
          </Link>
          <DropDown />
          <span className="header-baner__search-area">
            <Input
              size="middle"
              placeholder="Search..."
              status="error"
              prefix={<SearchOutlined />}
            />
          </span>
          <div className="header-baner__icon-group">
            <div className="cart-count">
              <Link to={ROUTES.CART}>
                <ShoppingCartOutlined
                  style={{ fontSize: "32px", color: "#FFF", cursor: "pointer" }}
                  title="Giỏ hàng"
                />
              </Link>
              <span className="number-cart">0</span>
            </div>
            <Link to={ROUTES.ACOUNT_LOGIN}>
              <div>
                <UserOutlined
                  style={{ fontSize: "28px", color: "#FFF", cursor: "pointer" }}
                  title="Tài khoản"
                />
                <CaretDownOutlined
                  style={{ fontSize: "16px", color: "#FFF", cursor: "pointer" }}
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="header-content">
          <p>
            <Link to={ROUTES.ALL_PRODUCT}>Trang chủ</Link>
            <Link to={ROUTES.FORYOU_PRODUCT}>Dành cho bạn</Link>
            <Link to={ROUTES.FAVORITE_PRODUCT}>Ưa chuộng</Link>
            <Link to={ROUTES.HEART_PRODUCT}>Sức Khỏe</Link>
            <Link to={ROUTES.MOM_AND_BABY_PRODUCT}>Mẹ và bé</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
