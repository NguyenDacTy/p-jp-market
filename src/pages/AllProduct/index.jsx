import React, { useEffect } from "react";
import "./style.css";
import { ArrowRightOutlined } from "@ant-design/icons";
import tpcnBanner from "../../img-banner/tpcn-title-banner.png";
import csskBanner from "../../img-banner/cssk-title-banner.png";
import tpldBanner from "../../img-banner/tpld-title-banner.png";
import csctBanner from "../../img-banner/csct-title-banner.png";
import spmvBanner from "../../img-banner/spmv2-title-banner.png";
import spbcBanner from "../../img-banner/spbc2-title-banner.png";
import gycbBanner from "../../img-banner/gycb-title-banner.png";
import productImg from "../../product-img/taoxoan1.jpg";
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

const AllProduct = () => {
  const dispatch = useDispatch();
  const { isLoading, products } = useSelector((state) => state.product);
  const { heartProducts } = useSelector((state) => state.heartProducts);
  const { beautyProducts } = useSelector((state) => state.beautyProducts);
  const { bodyProducts } = useSelector((state) => state.bodyProducts);
  // const { newProducts } = useSelector((state) => state.newProducts);
  // const { hotProducts } = useSelector((state) => state.hotProducts);
  // const { forYouProducts } = useSelector((state) => state.forYouProducts);

  // useSelector((state) => console.log(state, 'state'));

  useEffect(() => {
    dispatch(actFectchAllProduct());
    dispatch(actFectchAllHeartProduct());
    dispatch(actFectchAllBeautyProduct());
    dispatch(actFectchAllBodyProduct());
    // dispatch(actFectchAllNewProduct());
    // dispatch(actFectchAllHotProduct());
    // dispatch(actFectchAllForYouProduct());
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
                    <button className="detail-price__btn-add">
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
            return (
              <div className="item-product" key={item.id}>
                <div className="item-product__box-img">
                  <Link to={ROUTES.DETAIL_PRODUCT} title={item.name}>
                    <img
                      className="box-img__img"
                      src={item.image}
                      alt={item.name}
                    />
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
                    <button className="detail-price__btn-add">
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
                    <button className="detail-price__btn-add">
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
                    <button className="detail-price__btn-add">
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
          {/* {newProducts.map((item) => {
            return (
              <div className="item-product" key={item.id}>
                <div className="item-product__box-img">
                  <Link to={ROUTES.DETAIL_PRODUCT} title={item.name}>
                    <img src={productImg} alt={item.name} />
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
                    <button className="detail-price__btn-add">
                      Add to Cart
                    </button>
                    <Link to={ROUTES.CART}>
                      <button className="detail-price__btn-buy">Buy Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })} */}
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
          {/* {hotProducts.map((item) => {
            return (
              <div className="item-product" key={item.id}>
                <div className="item-product__box-img">
                  <Link to={ROUTES.DETAIL_PRODUCT} title={item.name}>
                    <img src={productImg} alt={item.name} />
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
                    <button className="detail-price__btn-add">
                      Add to Cart
                    </button>
                    <Link to={ROUTES.CART}>
                      <button className="detail-price__btn-buy">Buy Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })} */}
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
          {/* {forYouProducts.map((item) => {
            return (
              <div className="item-product" key={item.id}>
                <div className="item-product__box-img">
                  <Link to={ROUTES.DETAIL_PRODUCT} title={item.name}>
                    <img src={productImg} alt={item.name} />
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
                    <button className="detail-price__btn-add">
                      Add to Cart
                    </button>
                    <Link to={ROUTES.CART}>
                      <button className="detail-price__btn-buy">Buy Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
