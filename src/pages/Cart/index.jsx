import React, { useContext } from "react";
import "./style.css";
import HeaderComponent from "../../components/HeaderComponent";
import FooterComponent from "../../components/FooterComponent";
import { Link } from "react-router-dom";
import { ROUTES } from "../../const/routes";
import { MyContext } from "../../context";

const Cart = (props) => {
  const { cartStore, setCartStore } = useContext(MyContext);
  let total = 0;
  const arrCart = JSON.parse(localStorage.getItem("carts"));

  const removeItem = (productId) => {
    const updateCartItems = cartStore.filter((item) => item.id !== productId);
    setCartStore(updateCartItems);
  };

  const handlePlusSubmit = (productId, index) => {
    cartStore[index].qty += 1;
    const arr = [...cartStore];
    setCartStore(arr);
  };
  const handleMinusSubmit = (productId, index, quantity) => {
    if (quantity < 2) {
      removeItem(productId);
    } else {
      cartStore[index].qty -= 1;
      const arr = [...cartStore];
      setCartStore(arr);
    }
  };

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
          {cartStore.map((item, index) => {
            var current = item.qty;
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
                      onClick={() => handleMinusSubmit(item.id, index, current)}
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
                      onClick={() => handlePlusSubmit(item.id, index)}
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
                total += item.price * item.qty;
              })}
              <p style={{ color: "red" }} className="totalPrice">
                {new Intl.NumberFormat().format(total)}.000 đ
              </p>
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
