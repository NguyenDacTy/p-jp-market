import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { ArrowRightOutlined } from "@ant-design/icons";
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
import { actFectchAllProduct } from "../../redux/features/products/productSlice";
import { actFectchAllHeartProduct } from "../../redux/features/products/heartProductSlice";
import { actFectchAllBeautyProduct } from "../../redux/features/products/beautyProductSlice";
import { actFectchAllBodyProduct } from "../../redux/features/products/bodyProductSlice";
import { actFectchAllNewProduct } from "../../redux/features/products/newProductSlice";
import { actFectchAllHotProduct } from "../../redux/features/products/hotProductSlice";
import { actFectchAllForYouProduct } from "../../redux/features/products/forYouProductSlice";
import { MyContext } from "../../context";

const AllProduct = (props) => {
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

  const handleSubmitDetail = (item) => {
    setCartStore([item]);
  };

  const dispatch = useDispatch();
  const { isLoading, products } = useSelector((state) => state.product);
  const { heartProducts } = useSelector((state) => state.heartProduct);
  const { beautyProducts } = useSelector((state) => state.beautyProduct);
  const { bodyProducts } = useSelector((state) => state.bodyProduct);
  const { newProducts } = useSelector((state) => state.newProduct);
  const { hotProducts } = useSelector((state) => state.hotProduct);
  const { forYouProducts } = useSelector((state) => state.forYouProduct);

  useEffect(() => {
    dispatch(actFectchAllProduct());
    dispatch(actFectchAllHeartProduct());
    dispatch(actFectchAllBeautyProduct());
    dispatch(actFectchAllBodyProduct());
    dispatch(actFectchAllNewProduct());
    dispatch(actFectchAllHotProduct());
    dispatch(actFectchAllForYouProduct());
  }, []);

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
    </div>
  );
};

export default AllProduct;
