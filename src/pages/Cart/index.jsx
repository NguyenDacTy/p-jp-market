import React, { useContext } from "react";
import "./style.css";
import HeaderComponent from "../../components/HeaderComponent";
import FooterComponent from "../../components/FooterComponent";
import { Link } from "react-router-dom";
import { ROUTES } from "../../const/routes";
import { MyContext } from "../../context";

const Cart = (props) => {
  const count = props.qtyCart;

  const { cartStore, setCartStore } = useContext(MyContext);

  const removeItem = (productId) => {
    let current = props.qtyCart - 1;

    const newItem = { ...productId };

    const updateCartItems = cartStore.map((item) => item.id !== productId);
    setCartStore([updateCartItems]);
    console.log(updateCartItems, "sagdaef");

    if (current > 0) {
      props.setQtyCart(parseInt(current));
    } else {
      props.setQtyCart(0);
    }
  };

  const handlePlusSubmit = () => {
    let current = props.qtyCart + 1;
    props.setQtyCart(parseInt(current));
  };
  const handleMinusSubmit = () => {
    let current = props.qtyCart - 1;
    if (current > 0) {
      props.setQtyCart(parseInt(current));
    } else {
      props.setQtyCart(0);
    }
  };
  // const { cartStore, setCartStore } = useContext(MyContext);

  return (
    <div>
      <HeaderComponent {...props} />
      <div className="cart-container">
        <div className="cart-container__cart-product">
          <p className="cart-product__title">GIỎ HÀNG - {count} sản phẩm</p>
          <div style={{textAlign: 'center'}}>{cartStore.length === 0 ? "Chưa có sản phẩm " : ""}</div>
          {cartStore.map((item) => {
            return (
              <div key={item.id}>
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
                    {item.price}
                  </span>
                  <div className="cart-product__infor-btn">
                    <button
                      onClick={() => handleMinusSubmit(item)}
                      className="infor-btn__minus infor-btn"
                    >
                      -
                    </button>
                    <input
                      className="infor-btn__input"
                      disabled
                      value={item.qty}
                    />
                    <button
                      onClick={() => handlePlusSubmit(item)}
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
              <p>Tạm tính:</p>
              <p>asd đ</p>
            </div>
            <div className="order-product__total">
              <p>Tổng cộng:</p>
              <p style={{ color: "red" }}>asd đ</p>
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
