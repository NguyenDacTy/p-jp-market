import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import HeaderComponent from "../../components/HeaderComponent";
import FooterComponent from "../../components/FooterComponent";
import { Link } from "react-router-dom";
import { ROUTES } from "../../const/routes";
import { MyContext } from "../../context";

const Cart = (props) => {
  const { cartStore, setCartStore } = useContext(MyContext);

  const removeItem = (productId) => {
    const updateCartItems = cartStore.filter((item) => item.id !== productId);
    setCartStore(updateCartItems);
  };

  // const handlePlusSubmit = () => {
  //   props.setQtyCart(props.qtyCart + 1);
  // };
  // const handleMinusSubmit = () => {
  //   if (props.qtyCart > 1) {
  //     props.setQtyCart(props.qtyCart - 1);
  //   } else {
  //     props.setQtyCart(0);
  //   }
  // };

  return (
    <div>
      <HeaderComponent {...props} />
      <div className="cart-container">
        <div className="cart-container__cart-product">
          <p className="cart-product__title">
            GIỎ HÀNG - {cartStore.length} sản phẩm
          </p>
          <div style={{ textAlign: "center" }}>
            {cartStore.length === 0 ? "Chưa có sản phẩm " : ""}
          </div>
          {cartStore.map((item) => {
            var current = item.qty;

            const handlePlusSubmit = () => {};
            const handleMinusSubmit = () => {};

            const formatPrice = new Intl.NumberFormat().format(item.price);
            return (
              <div key={item}>
                <div className="cart-product__infor">
                  <img src={item.image} />
                  <div className="cart-product__infor-content">
                    <p className="infor-content__text">{item.name}</p>
                    <p
                      onClick={() => removeItem(item.id)}
                      className="infor-content__del"
                    >
                      Xóa
                    </p>
                  </div>
                  <span className="cart-product__infor-price">
                    {formatPrice}.000 đ
                  </span>
                  <div className="cart-product__infor-btn">
                    <button
                      onClick={() => handleMinusSubmit()}
                      className="infor-btn__minus infor-btn"
                    >
                      -
                    </button>
                    <input
                      className="infor-btn__input"
                      disabled
                      value={current}
                    />
                    <button
                      onClick={() => handlePlusSubmit()}
                      className="infor-btn__flus infor-btn"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cart-container__order-product">
          <div className="order-product__price">
            <div className="order-product__calculator">
              <p className="title-now-price">Tạm tính:</p>
              <p className="totalPrice">
                {cartStore.map((item) => {
                  const nowTotal = new Intl.NumberFormat().format(
                    item.price * item.qty
                  );
                  return (
                    <ul className="now-price">
                      <li>{nowTotal}.000 đ</li>
                    </ul>
                  );
                })}
              </p>
            </div>
            <div className="order-product__total">
              <p className="title-final-price">Tổng cộng:</p>
              {cartStore.map((item) => {
                const nowTotal = new Intl.NumberFormat().format(
                  item.price * item.qty
                );

                return (
                  <p style={{ color: "red" }} className="totalPrice">
                    {nowTotal}.000 đ
                  </p>
                );
              })}
            </div>
          </div>
          <Link to={ROUTES.PAYMENT_PRODUCT}>
            <button className="order-product__btn">ĐẶT HÀNG</button>
          </Link>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default Cart;
