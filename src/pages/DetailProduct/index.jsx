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

const DetailProduct = (props) => {
  const handleSubmit = () => {
    let current = props.qtyCart + 1;
    props.setQtyCart(current);
  };
  const { cartStore } = useContext(MyContext);

  return (
    <div>
      <HeaderComponent {...props} />
      {cartStore.map((item) => {
        return (
          <>
            <div key={item.id}>
              <div className="bg-detail-container">
                <div className="detail-container" >
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
                              {item.price} đ
                            </p>{" "}
                            <span className="up-infor__price-old">
                              <strike>{item.oldPrice} đ</strike>
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
                      <p>
                        Tảo xoắn Spirulina Nhật Bản được tổ chức WHO – Tổ chức Y
                        tế thế giới đánh giá là thực phẩm tự nhiên tốt nhất cho
                        sức khỏe người thế kỷ 21, nhờ chứa loạt Vitamin, khoáng
                        chất, Protein cao tốt cho sức khoẻ. Tảo xoắn Spirulina
                        Nhật Bản hộp 2200 viên được điều chế từ 100% tảo xoắn
                        Spirulina, giúp bồi bổ sức khoẻ, hỗ trợ tiêu hoá và làm
                        đẹp da, tăng cường đề kháng cho mọi lứa tuổi.
                      </p>
                      <h3>
                        Tảo xoắn Spirulina Nhật Bản – “Thực phẩm vàng” chăm sóc
                        sức khỏe mọi nhà
                      </h3>
                      <h3>Công dụng tảo xoắn Nhật Bản tem đỏ</h3>
                      <ul>
                        <li>
                          Hỗ trợ tăng cường sức khỏe và sức đề kháng, đặc biệt ở
                          người lớn tuổi, người phục hồi sau phẫu thuật, trẻ em
                          kén ăn.
                        </li>
                        <li>
                          Giúp giảm thiểu nguy cơ mắc các bệnh lý thông thường
                          như tim mạch, ung thư, xương khớp…
                        </li>
                        <li>
                          Tảo Spirulina giúp điều hòa lượng mỡ trong máu và giảm
                          thiểu nguy cơ mắc các bệnh liên quan đến dạ dày, tim
                          mạch, tiểu đường, béo phì...
                        </li>
                        <li>
                          Các chất giúp cơ thể khỏe mạnh, cải thiện chức năng hệ
                          tiêu hóa, đồng thời giúp cơ thể bài tiết tốt hơn,
                          phòng tránh các bệnh lây nhiễm thường gặp.
                        </li>
                        <li>
                          Thanh lọc cơ thể, hỗ trợ đào thải các độc tố, giúp ổn
                          định cân nặng và làm đẹp da cho phái nữ với tảo
                          Spirulina.
                        </li>
                        <li>
                          Giúp cải thiện tình trạng đau nhức, thoái hóa, viêm
                          khớp, loãng xương,… đồng thời hỗ trợ điều trị các
                          chứng bệnh về mắt, giúp cơ thể luôn khỏe mạnh và tràn
                          đầy sức sống.
                        </li>
                        <li>
                          Bổ sung hệ dưỡng chất thiết yếu gồm Canxi, DHA, Folic
                          Acid và sắt giúp mẹ bầu cứng cáp, bé phát triển khỏe
                          mạnh hơn.
                        </li>
                      </ul>
                      <h3>Thành phần của tảo xoắn Spirulina Nhật Bản</h3>
                      <p>
                        Tảo xoắn Spirulina Nhật Bản hộp 2200 viên mác đỏ có
                        thành phần bao gồm Carbonhydrate, chất béo, Protein,
                        đường, Axit Amin (Histidine, Leucine, Threonine, Lysine,
                        Isoleuchine, Methionine, Phenylalanine, Tryptophan),
                        Vitamin A , Vitamin B1 , Vitamin B2, Vitamin B3, Vitamin
                        B6, Vitamin B12, Vitamin C, Vitamin K, khoáng chất
                        (Kali, Canxi, Magie, Kẽm, Sắt, Selen, Mangan, Natri),
                        Axit béo không no (Gamma Linolenic Axit - Omega 6).
                      </p>
                      <h3>Hướng dẫn sử dụng tảo xoắn</h3>
                      <ul>
                        <li>
                          Đối với người lớn: Ngày uống 20 - 30 viên tảo xoắn
                          trước bữa ăn hoặc sau bữa ăn (có thể chia làm 2 - 3
                          lần).
                        </li>
                        <li>
                          Đối với trẻ em dưới 5 tuổi: Uống dưới 5 viên/lần, có
                          thể nghiền thành bột chung với thức ăn (nên hỏi ý kiến
                          bác sĩ trước khi sử dụng).
                        </li>
                        <li>
                          Đối với trẻ em trên 5 tuổi: Uống 10 - 20 viên/ngày,
                          mỗi ngày uống 2 - 3 lần.
                        </li>
                        <li>
                          Người đang giảm cân: uống tảo trước bữa ăn 30 phút.
                        </li>
                        <li>
                          Nếu muốn tăng cân: uống tảo biển sau bữa ăn 30 phút.
                        </li>
                      </ul>
                      <h3>Lưu ý</h3>
                      <ul>
                        <li>
                          Dùng được cho phụ nữ có thai hoặc đang cho con bú.
                        </li>
                        <li>
                          Tùy theo cơ địa của người dùng mà có hiệu quả khác
                          nhau.
                        </li>
                        <li>
                          Sản phẩm này không phải là thuốc, không có tác dụng
                          thay thế thuốc chữa bệnh.
                        </li>
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
