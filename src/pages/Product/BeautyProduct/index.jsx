import React, { useContext, useEffect } from "react";
import "./style.css";
import HeaderComponent from "../../../components/HeaderComponent";
import FooterComponent from "../../../components/FooterComponent";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../const/routes";
import beautyBanner from "../../../img-banner/tpld-title-banner.png";
import { useDispatch, useSelector } from "react-redux";
import { actFectchAllBeautyProduct } from "../../../redux/features/products/beautyProductSlice";
import { MyContext } from "../../../context";

const BeautyProduct = (props) => {
  const { cartStore, setCartStore } = useContext(MyContext);

  const handleSubmit = (item) => {
    let current = props.qtyCart + 1;
    props.setQtyCart(current);
    setCartStore([...cartStore, item]);
  };

  const dispatch = useDispatch();
  const { beautyProducts } = useSelector((state) => state.beautyProduct);

  useEffect(() => {
    dispatch(actFectchAllBeautyProduct());
  }, []);

  return (
    <div>
      <HeaderComponent {...props} />
      <div className="beauty-container ">
        <div className="title-banner">
          <Link to={ROUTES.BEAUTY_PRODUCT}>
            <img src={beautyBanner} className="title-banner-img" />
          </Link>
        </div>
        <div className="title-list">
          {beautyProducts.map((item) => {
            return (
              <div className="item-product" key={item.id}>
                <div className="item-product__box-img">
                  <Link to={ROUTES.DETAIL_PRODUCT} title={item.name}>
                    <img src={item.image} alt={item.name} />
                  </Link>
                </div>
                <div className="item-product__detail">
                  <h5 className="item-product__detail-title">{item.name}</h5>
                  <div
                    className="item-product__detail-price"
                    style={{ display: "flex" }}
                  >
                    <p className="price">4{item.price} đ</p>
                    <p className="old-price">
                      <strike>{item.oldPrice} đ</strike>
                    </p>
                  </div>
                  <div className="detail-price__btn">
                    <button
                      onClick={() => handleSubmit(item)}
                      className="detail-price__btn-add"
                    >
                      Add to Cart
                    </button>
                    <Link to={ROUTES.CART}>
                      <button className="detail-price__btn-buy">Buy Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default BeautyProduct;
