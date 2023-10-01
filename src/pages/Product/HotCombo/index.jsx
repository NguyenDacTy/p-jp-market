import React, { useContext, useEffect } from "react";
import "./style.css";
import HeaderComponent from "../../../components/HeaderComponent";
import FooterComponent from "../../../components/FooterComponent";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../const/routes";
import hotomboBanner from "../../../img-banner/hotcombo-title-banner.png";
import productImg from "../../../product-img/taoxoan.jpg";
import { useDispatch, useSelector } from "react-redux";
import { actFectchAllHotComboProduct } from "../../../redux/features/products/hotComboProductSlice";
import { MyContext } from "../../../context";

const HotCombo = (props) => {
  const { cartStore, setCartStore } = useContext(MyContext);
  const { detailStore, setDetailStore } = useContext(MyContext);
  const {valueSearch, setValueSearch } = useContext(MyContext);

  const handleSubmit = (product) => {
    const newItem = { ...product };
    newItem.qty = 1;
    let current = props.qtyCart + 1;
    const existingItem = cartStore.find((item) => item.code === product.code);

    if (existingItem) {
      existingItem.qty += 1;
    } else {
      setCartStore([...cartStore, newItem]);
    }
    props.setQtyCart(current);
  };

  const dispatch = useDispatch();
  const { hotComboProducts } = useSelector((state) => state.hotComboProduct);

  useEffect(() => {
    dispatch(actFectchAllHotComboProduct(valueSearch));
  }, [valueSearch]);

  const handleSubmitDetail = (item) => {
    setDetailStore(item);
  };

  return (
    <div>
      <HeaderComponent {...props} />
      <div className="hotCombo-container">
        <div className="title-banner">
          <Link to={ROUTES.HOT_COMBO}>
            <img src={hotomboBanner} className="title-banner-img" />
          </Link>
        </div>
        <div className="title-list">
          {hotComboProducts.map((item) => {
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
                    className="detail-title-link"
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
                      <strike>{formatOldPrice}.000 đ</strike>
                    </p>
                  </div>
                  <div className="detail-price__btn">
                    <button
                      onClick={() => handleSubmit(item)}
                      className="detail-price__btn-add"
                    >
                      Add to Cart
                    </button>
                    <Link
                      to={ROUTES.DETAIL_PRODUCT}
                      onClick={() => handleSubmitDetail(item)}
                    >
                      <button className="detail-price__btn-buy">
                        Infor Product
                      </button>
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

export default HotCombo;
