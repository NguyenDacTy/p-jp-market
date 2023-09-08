import React, { useContext, useEffect } from "react";
import "./style.css";
import HeaderComponent from "../../../components/HeaderComponent";
import FooterComponent from "../../../components/FooterComponent";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../const/routes";
import spbcBanner from "../../../img-banner/spbc2-title-banner.png";
import { useDispatch, useSelector } from "react-redux";
import { actFectchAllHotProduct } from "../../../redux/features/products/hotProductSlice";
import { MyContext } from "../../../context";

const BestSeller = (props) => {
  const { cartStore, setCartStore } = useContext(MyContext);

  const handleSubmit = (product) => {
    const newItem = { ...product };
    newItem.qty = 1;
    let current = props.qtyCart + 1;
    const existingItem = cartStore.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.qty += 1;
    } else {
      setCartStore([...cartStore, newItem]);
    }
    props.setQtyCart(current);
  };

  const dispatch = useDispatch();
  const { hotProducts } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(actFectchAllHotProduct());
  }, []);

  const handleSubmitDetail = (item) => {
    setCartStore([item]);
  };

  return (
    <div>
      <HeaderComponent {...props} />
      <div className="bestSeller-container">
        <div className="title-banner">
          <Link to={ROUTES.HOT_PRODUCT}>
            <img src={spbcBanner} className="title-banner-img" />
          </Link>
        </div>
        <div className="title-list">
          {hotProducts.map((item) => {
            const formatPrice = new Intl.NumberFormat().format(item.price);
            const formatOldPrice = new Intl.NumberFormat().format(
              item.oldPrice
            );
            return (
              <div className="item-product" key={item.id}>
                <div className="item-product__box-img">
                  <Link
                    onClick={() => handleSubmitDetail(item)}
                    to={ROUTES.DETAIL_PRODUCT}
                    title={item.name}
                  >
                    <img src={item.image} alt={item.name} />
                  </Link>
                </div>
                <div className="item-product__detail">
                  <Link
                    onClick={() => handleSubmitDetail(item)}
                    to={ROUTES.DETAIL_PRODUCT}
                  >
                    <h5 className="item-product__detail-title">{item.name}</h5>
                  </Link>
                  <div
                    className="item-product__detail-price"
                    style={{ display: "flex" }}
                  >
                    <p className="price">{formatPrice}.000 đ</p>
                    <p className="old-price">
                      <strike>4{formatOldPrice}.000 đ</strike>
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

export default BestSeller;
