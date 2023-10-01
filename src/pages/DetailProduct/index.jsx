import React, { useContext, useEffect } from "react";
import "./style.css";
import HeaderComponent from "../../components/HeaderComponent";
import FooterComponent from "../../components/FooterComponent";
import quality from "../../img/list detail img/chatluong.png";
import refund from "../../img/list detail img/hoantien.png";
import lie from "../../img/list detail img/doitra.png";
import freeship from "../../img/list detail img/freeship.png";
import { ROUTES } from "../../const/routes";
import { Link } from "react-router-dom";
import { MyContext } from "../../context";
import { useDispatch, useSelector } from "react-redux";
import { actFectchAllHeightPlusProduct } from "../../redux/features/products/heightPlusProductSlice";
import { actFectchAllHotBrandProduct } from "../../redux/features/products/hotBrandProductSlice";
import { actFectchAllHotComboProduct } from "../../redux/features/products/hotComboProductSlice";

import { actFectchAllFavoriteProduct } from "../../redux/features/products/favoriteProductSlice";

const DetailProduct = (props) => {
  const { cartStore, setCartStore } = useContext(MyContext);
  const { products } = useSelector((state) => state.product);
  const { heartProducts } = useSelector((state) => state.heartProduct);
  const { beautyProducts } = useSelector((state) => state.beautyProduct);
  const { bodyProducts } = useSelector((state) => state.bodyProduct);
  const { newProducts } = useSelector((state) => state.newProduct);
  const { hotProducts } = useSelector((state) => state.hotProduct);
  const { forYouProducts } = useSelector((state) => state.forYouProduct);
  const { heightPlusProducts } = useSelector(
    (state) => state.heightPlusProduct
  );
  const { hotBrandProducts } = useSelector((state) => state.hotBrandProduct);
  const { hotComboProducts } = useSelector((state) => state.hotComboProduct);
  const { favoriteProducts } = useSelector((state) => state.favoriteProduct);
  const allProduct = [];
  const { detailStore, setDetailStore } = useContext(MyContext);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFectchAllHeightPlusProduct());
    dispatch(actFectchAllHotBrandProduct());
    dispatch(actFectchAllHotComboProduct());
    dispatch(actFectchAllFavoriteProduct());
  }, []);

  const pushItem = (products) => {
    products.map((item) => {
      allProduct.push(item);
    });
  };
  pushItem(products);
  pushItem(beautyProducts);
  pushItem(bodyProducts);
  pushItem(forYouProducts);
  pushItem(heartProducts);
  pushItem(heightPlusProducts);
  pushItem(hotBrandProducts);
  pushItem(hotComboProducts);
  pushItem(hotProducts);
  pushItem(newProducts);
  pushItem(favoriteProducts);

  const newDetail = allProduct.filter((item) => item.code == detailStore.code);

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

  return (
    <div>
      <HeaderComponent {...props} />
      {newDetail.map((item) => {
        const formatPrice = new Intl.NumberFormat().format(item.price);
        const formatOldPrice = new Intl.NumberFormat().format(item.oldPrice);
        return (
          <>
            <div key={item.id}>
              <div className="bg-detail-container">
                <div className="detail-container">
                  <div className="detail-container__header">
                    <div className="detail-container__header-left">
                      <img src={item.image} alt={item.name} title={item.name} />
                    </div>
                    <div className="detail-container__header-right">
                      <div className="header-right__up">
                        <h4 className="header-right__up-title">{item.name}</h4>
                        <div className="header-right__up-infor">
                          <div className="up-infor__price">
                            <p className="up-infor__price-now">
                              {formatPrice}.000 đ
                            </p>{" "}
                            <span className="up-infor__price-old">
                              <strike>{formatOldPrice}.000 đ</strike>
                            </span>
                          </div>
                          <div className="up-infor__btn">
                            <button
                              onClick={() => handleSubmit(item)}
                              className="up-infor__btn-add"
                            >
                              Add To Cart
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="header-right__down">
                        <div className="header-right__down-left">
                          <div className="policy-product">
                            <img src={quality} />
                            <span>100% sản phẩm được kiểm soát chất lượng</span>
                          </div>
                          <div className="policy-product pt-10">
                            <img src={refund} />
                            <span>
                              Hoàn tiền 200% nếu sản phẩm kém chất lượng
                            </span>
                          </div>
                        </div>
                        <div className="header-right__down-right">
                          <div className="policy-product">
                            <img src={lie} />
                            <span>Cam kết 90 ngày đổi trả miễn phí</span>
                          </div>
                          <div className="policy-product pt-10">
                            <img src={freeship} />
                            <span>
                              Miễn phí vận chuyển (Giao thường) cho đơn từ{" "}
                              <abbs style={{ color: "blue" }}>500.000 đ</abbs>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="detail-container__body">
                    <h3 className="detail-container__body-title">
                      Mô tả sản phẩm
                    </h3>
                    <div className="detail-container__body-content">
                      <p>{item.pTitle}</p>
                      <h3>Công dụng: </h3>
                      <ul>
                        <li>{item.cdungLi1}</li>
                        <li>{item.cdungLi2}</li>
                        <li>{item.cdungLi3}</li>
                        <li>{item.cdungLi4}</li>
                        <li>{item.cdungLi5}</li>
                        <li>{item.cdungLi6}</li>
                      </ul>
                      <h3>Thành phần:</h3>
                      <p>{item.tphan}</p>
                      <h3>Hướng dẫn sử dụng:</h3>
                      <ul>
                        <li>{item.hdanLi1}</li>
                        <li>{item.hdanLi2}</li>
                        <li>{item.hdanLi3}</li>
                      </ul>
                      <h3>Lưu ý:</h3>
                      <ul>
                        <li>{item.luuyLi1}</li>
                        <li>{item.luuyLi2}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
      <FooterComponent />
    </div>
  );
};

export default DetailProduct;
