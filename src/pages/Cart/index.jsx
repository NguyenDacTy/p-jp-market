import React from "react";
import "./style.css";
import HeaderComponent from "../../components/HeaderComponent";
import FooterComponent from "../../components/FooterComponent";
import product from "../../product-img/taoxoan.jpg";
import { Link } from "react-router-dom";
import { ROUTES } from "../../const/routes";

const Cart = () => {
  return (
    <div>
      <HeaderComponent />
      <div className="cart-container">
        <div className="cart-container__cart-product">
          <p className="cart-product__title">GIỎ HÀNG - 1 sản phẩm</p>
          <div className="cart-product__infor">
            <img src={product} />
            <div className="cart-product__infor-content">
              <p className="infor-content__text">
                Tảo xoắn Spirulina Japan Algae Nhật Bản 2200 viên
              </p>
              <p className="infor-content__del">Xóa</p>
            </div>
            <span className="cart-product__infor-price">449.000 đ</span>
            <div className="cart-product__infor-btn">
              <button className="infor-btn__minus infor-btn">-</button>
              <input className="infor-btn__input" value="1" />
              <button className="infor-btn__flus infor-btn">+</button>
            </div>
          </div>
        </div>
        <div className="cart-container__order-product">
          <div className="order-product__price">
            <div className="order-product__calculator">
              <p>Tạm tính:</p>
              <p>449.000 đ</p>
            </div>
            <div className="order-product__total">
              <p>Tổng cộng:</p>
              <p style={{color: 'red'}}>449.000 đ</p>
            </div>
          </div>
          <Link to={ROUTES.PAYMENT_PRODUCT}><button className="order-product__btn">ĐẶT HÀNG</button></Link>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default Cart;
