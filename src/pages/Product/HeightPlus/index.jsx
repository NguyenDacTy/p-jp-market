import React, { useEffect } from "react";
import "./style.css";
import HeaderComponent from "../../../components/HeaderComponent";
import FooterComponent from "../../../components/FooterComponent";
import { Link, Route } from "react-router-dom";
import { ROUTES } from "../../../const/routes";
import heightPlusBanner from "../../../img-banner/heightplus-title-banner.png";
import { useDispatch, useSelector } from "react-redux";
import { actFectchAllHeightPlusProduct } from "../../../redux/features/products/heightPlusProductSlice";

const HeightPlus = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    let current = props.qtyCart + 1;
    props.setQtyCart(current);
  };

  const dispatch = useDispatch();
  const { heightPlusProducts } = useSelector(
    (state) => state.heightPlusProduct
  );

  useEffect(() => {
    dispatch(actFectchAllHeightPlusProduct());
  }, []);

  return (
    <div>
      <HeaderComponent {...props} />
      <div className="heightPlus-container">
        <div className="title-banner">
          <Link to={ROUTES.HEIGHT_PLUS}>
            <img src={heightPlusBanner} className="title-banner-img" />
          </Link>
        </div>
        <div className="title-list">
          {heightPlusProducts.map((item) => {
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
                    <p className="price">{item.price} đ</p>
                    <p className="old-price">
                      <strike>{item.oldPrice} đ</strike>
                    </p>
                  </div>
                  <div className="detail-price__btn">
                    <button
                      onClick={(e) => handleSubmit(e)}
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

export default HeightPlus;
