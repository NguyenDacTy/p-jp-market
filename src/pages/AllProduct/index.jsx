import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { ArrowRightOutlined, MessageTwoTone } from "@ant-design/icons";
import tpcnBanner from "../../img-banner/tpcn-title-banner.png";
import csskBanner from "../../img-banner/cssk-title-banner.png";
import tpldBanner from "../../img-banner/tpld-title-banner.png";
import csctBanner from "../../img-banner/csct-title-banner.png";
import spmvBanner from "../../img-banner/spmv2-title-banner.png";
import spbcBanner from "../../img-banner/spbc2-title-banner.png";
import gycbBanner from "../../img-banner/gycb-title-banner.png";
import { ROUTES } from "../../const/routes";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Spin } from "antd";
import {
  actFectchAllProduct,
  actFectchProductByName,
} from "../../redux/features/products/productSlice";
import { actFectchAllHeartProduct } from "../../redux/features/products/heartProductSlice";
import { actFectchAllBeautyProduct } from "../../redux/features/products/beautyProductSlice";
import { actFectchAllBodyProduct } from "../../redux/features/products/bodyProductSlice";
import { actFectchAllNewProduct } from "../../redux/features/products/newProductSlice";
import { actFectchAllHotProduct } from "../../redux/features/products/hotProductSlice";
import { actFectchAllForYouProduct } from "../../redux/features/products/forYouProductSlice";
import logoM from "../../img/logo/JPM-logo.png";
import checked from "../../img/blue-checked.png";
import { MyContext } from "../../context";

const AllProduct = (props) => {
  const {valueSearch, setValueSearch, cartStore,  setCartStore, detailStore, setDetailStore } = useContext(MyContext);

  const dispatch = useDispatch();

  const [showMessage, setShowMessage] = useState(false);
  localStorage.setItem("carts", JSON.stringify(cartStore));
 

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

  const handleSubmitDetail = (item) => {
    setDetailStore(item);
  };

  const { isLoading, products } = useSelector((state) => state.product);
  const { heartProducts } = useSelector((state) => state.heartProduct);
  const { beautyProducts } = useSelector((state) => state.beautyProduct);
  const { bodyProducts } = useSelector((state) => state.bodyProduct);
  const { newProducts } = useSelector((state) => state.newProduct);
  const { hotProducts } = useSelector((state) => state.hotProduct);
  const { forYouProducts } = useSelector((state) => state.forYouProduct);

  useEffect(() => {
    dispatch(actFectchAllProduct(valueSearch));
    dispatch(actFectchAllHeartProduct(valueSearch));
    dispatch(actFectchAllBeautyProduct(valueSearch));
    dispatch(actFectchAllBodyProduct(valueSearch));
    dispatch(actFectchAllNewProduct(valueSearch));
    dispatch(actFectchAllHotProduct(valueSearch));
    dispatch(actFectchAllForYouProduct(valueSearch));
  }, [valueSearch]);

  if (isLoading) {
    return <Spin />;
  }

  return (
    <div className="container-all-product">
      {isLoading && <Spin />}
      <div className="all-product__tpcn">
        <div className="title-banner">
          <Link className="title-link" to={ROUTES.POTION_PRODUCT}>
            <img src={tpcnBanner} className="title-banner-img" />
            <button className="title-banner_btn">
              Xem tất cả <ArrowRightOutlined />
            </button>
          </Link>
        </div>
        <div className="title-list">
          {products.map((item) => {
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
      <div className="all-product__cssk all-product__tpcn">
        <div className="title-banner">
          <Link className="title-link" to={ROUTES.HEART_PRODUCT}>
            <img src={csskBanner} className="title-banner-img" />
            <button className="title-banner_btn">
              Xem tất cả <ArrowRightOutlined />
            </button>
          </Link>
        </div>
        <div className="title-list">
          {heartProducts.map((item) => {
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
                    <img
                      className="box-img__img"
                      src={item.image}
                      alt={item.name}
                    />
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
      <div className="all-product__cssk all-product__tpcn">
        <div className="title-banner">
          <Link className="title-link" to={ROUTES.BEAUTY_PRODUCT}>
            <img src={tpldBanner} className="title-banner-img" />
            <button className="title-banner_btn">
              Xem tất cả <ArrowRightOutlined />
            </button>
          </Link>
        </div>
        <div className="title-list">
          {beautyProducts.map((item) => {
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
                      onClick={() => handleSubmitDetail}
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
      <div className="all-product__cssk all-product__tpcn">
        <div className="title-banner">
          <Link className="title-link" to={ROUTES.BODY_PRODUCT}>
            <img src={csctBanner} className="title-banner-img" />
            <button className="title-banner_btn">
              Xem tất cả <ArrowRightOutlined />
            </button>
          </Link>
        </div>
        <div className="title-list">
          {bodyProducts.map((item) => {
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
      <div className="all-product__cssk all-product__tpcn">
        <div className="title-banner">
          <Link className="title-link" to={ROUTES.NEW_PRODUCT}>
            <img src={spmvBanner} className="title-banner-img" />
            <button className="title-banner_btn">
              Xem tất cả <ArrowRightOutlined />
            </button>
          </Link>
        </div>
        <div className="title-list">
          {newProducts.map((item) => {
            const formatPrice = new Intl.NumberFormat().format(item.price);
            // const formatOldPrice = new Intl.NumberFormat().format(
            //   item.oldPrice
            // );
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
                    {/* <p className="old-price">
                      <strike>{item.oldPrice} đ</strike>
                    </p> */}
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
      <div className="all-product__cssk all-product__tpcn">
        <div className="title-banner">
          <Link className="title-link" to={ROUTES.HOT_PRODUCT}>
            <img src={spbcBanner} className="title-banner-img" />
            <button className="title-banner_btn">
              Xem tất cả <ArrowRightOutlined />
            </button>
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
      <div className="all-product__cssk all-product__tpcn">
        <div className="title-banner">
          <Link className="title-link" to={ROUTES.FORYOU_PRODUCT}>
            <img src={gycbBanner} className="title-banner-img" />
            <button className="title-banner_btn">
              Xem tất cả <ArrowRightOutlined />
            </button>
          </Link>
        </div>
        <div className="title-list">
          {forYouProducts.map((item) => {
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
        <div>
          {showMessage && (
            <div className="message-container">
              <div className="message-container__header">
                <img className="header-logo" src={logoM} />
                <div className="header-btn">
                  <button>•••</button>
                  <button onClick={() => setShowMessage(!showMessage)}>
                    ▬
                  </button>
                </div>
              </div>
              <div className="message-container__body">
                <h3>
                  Chat với Siêu thị Nhật Bản Janpan Market{" "}
                  <span>
                    <img
                      style={{ width: "18px", height: "14px" }}
                      src={checked}
                    />
                  </span>
                </h3>
                <h5>Xin chào, cảm ơn bạn đã liên hệ!</h5>
              </div>
              <div className="message-container__footer">
                <button>Bắt đầu chat</button>
              </div>
            </div>
          )}
          <MessageTwoTone
            style={{
              cursor: "pointer",
              fontSize: "55px",
              bottom: "50px",
              display: "block",
              overflow: "visible",
              position: "fixed",
              right: "70px",
              top: "auto",
            }}
            onClick={() => setShowMessage(!showMessage)}
          />
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
