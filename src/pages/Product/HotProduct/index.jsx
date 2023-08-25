import React, { useContext, useEffect } from "react";
import "./style.css";
import HeaderComponent from "../../../components/HeaderComponent";
import FooterComponent from "../../../components/FooterComponent";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../const/routes";
import hotBanner from "../../../img-banner/spbc2-title-banner.png";
import { useDispatch, useSelector } from "react-redux";
import { actFectchAllHotProduct } from "../../../redux/features/products/hotProductSlice";
import { MyContext } from "../../../context";

const HotProduct = (props) => {
  const { cartStore, setCartStore } = useContext(MyContext);

  const handleSubmit = (item) => {
    let current = props.qtyCart + 1;
    props.setQtyCart(current);
    setCartStore([...cartStore, item]);
  };

  const dispatch = useDispatch();
  const { hotProducts } = useSelector((state) => state.hotProduct);

  useEffect(() => {
    dispatch(actFectchAllHotProduct());
  }, []);

  return (
    <div>
      <HeaderComponent {...props} />
      <div className="hotProduct-container">
        <div className="title-banner">
          <Link to={ROUTES.HOT_PRODUCT}>
            <img src={hotBanner} className="title-banner-img" />
          </Link>
        </div>
        <div className="title-list">
          {hotProducts.map((item) => {
            return (
              <div className="item-product" key={item.id}>
                <div className="item-product__box-img">
                  <Link to={ROUTES.DETAIL_PRODUCT} title={item.name}>
                    <img src={item.image} alt={item.name} />
                  </Link>
                </div>
                <div className="item-product__detail">
                  <Link
                    className="detail-title-link"
                    to={ROUTES.DETAIL_PRODUCT}
                  >
                    <h5 className="item-product__detail-title">{item.name}</h5>
                  </Link>
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

export default HotProduct;
