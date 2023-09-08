import React, { useContext } from "react";
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

const DetailProduct = (props) => {
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

  return (
    <div>
      <HeaderComponent {...props} />
      {cartStore.map((item) => {
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
                            <Link to={ROUTES.CART}>
                              <button className="up-infor__btn-buy">
                                Buy Now
                              </button>
                            </Link>
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
