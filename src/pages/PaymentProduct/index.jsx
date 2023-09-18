import React, { useContext, useState } from "react";
import "./style.css";
import HeaderComponent from "../../components/HeaderComponent";
import FooterComponent from "../../components/FooterComponent";
import { Input, Radio, Space, Table } from "antd";
import { MyContext } from "../../context";

const PaymentProduct = (props) => {
  const { cartStore, setCartStore } = useContext(MyContext);

  let total = 0;

  const handlePayment = () => {
    alert(`Đã tiếp nhận đơn hàng. Bạn sẽ sớm nhận được email từ chúng tôi.`);
  };

  const [value, setValue] = useState(1);
  const city = [
    "Điện Biên",
    "Hòa Bình",
    "Lai Châu",
    "Lào Cai",
    "Sơn La",
    "Yên Bái",
    "Bắc Giang",
    "Bắc Kạn",
    "Cao Bằng",
    "Hà Giang",
    "Lạng Sơn",
    "Phú Thọ",
    "Quảng Ninh",
    "Thái Nguyên",
    "Tuyên Quang",
    "Bắc Ninh",
    "Hà Nam",
    "Thành phố Hà Nội",
    "Hải Dương",
    "Thành phố Hải Phòng",
    "Hưng Yên",
    "Nam Định",
    "Ninh Bình",
    "Thái Bình",
    "Vĩnh Phúc",
    "Hà Tĩnh",
    "Nghệ An",
    "Quảng Bình",
    "Quảng Trị",
    "Thanh Hóa",
    "Thừa Thiên Huế",
    "Bình Định",
    "Bình Thuận",
    "Thành phố Đà Nẵng",
    "Khánh Hòa",
    "Ninh Thuận",
    "Phú Yên",
    "Quảng Nam",
    "Quảng Ngãi",
    "Bà Rịa Vũng Tàu",
    "Bình Dương",
    "Bình Phước",
    "Đồng Nai",
    "Thành phố Hồ Chí Minh",
    "Tây Ninh",
    "Đắk Lắk",
    "Đắk Nông",
    "Gia Lai",
    "Kon Tum",
    "Lâm Đồng",
  ];
  const distrist = [
    "Quận Ba Đình",
    "Quận Hoàn Kiếm",
    "Quận Tây Hồ",
    "Quận Long Biên",
    "Quận Cầu Giấy",
    "Quận Đống Đa",
    "Quận Hai Bà Trưng",
    "Quận Hoàng Mai",
    "Quận Thanh Xuân",
    "Huyện Sóc Sơn",
    "Huyện Đông Anh",
    "Huyện Gia Lâm",
    "Quận Nam Từ Liêm",
    "Huyện Thanh Trì",
    "Quận Bắc Từ Liêm",
    "Huyện Mê Linh",
    "Quận Hà Đông",
    "Thị xã Sơn Tây",
    "Huyện Ba Vì",
    "Huyện Phúc Thọ",
    "Huyện Đan Phượng",
    "Huyện Hoài Đức",
    "Huyện Quốc Oai",
    "Huyện Thạch Thất",
    "Huyện Chương Mỹ",
    "Huyện Thanh Oai",
    "Huyện Thường Tín",
    "Huyện Phú Xuyên",
    "Huyện Ứng Hòa",
    "Huyện Mỹ Đức",
  ];
  const ward = [
    "Huyện Phúc Thọ",
    "Huyện Đan Phượng",
    "Huyện Hoài Đức",
    "Huyện Quốc Oai",
    "Huyện Thạch Thất",
    "Huyện Chương Mỹ",
    "Huyện Thanh Oai",
    "Huyện Thường Tín",
    "Huyện Phú Xuyên",
    "Huyện Ứng Hòa",
    "Huyện Mỹ Đức",
  ];
  const columns = [
    {
      title: "Sản phẩm",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "SL",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Thành tiền",
      dataIndex: "price",
      key: "price",
    },
  ];
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div>
      <HeaderComponent {...props} />
      <div className="container-buy">
        <div className="container-infor-payment">
          <div className="infor-transport">
            <h3 className="infor-transport-title">Thông tin vận chuyển</h3>
            <div className="infor-transport-input">
              <div className="name-phone">
                <Input placeholder="Enter your name" className="name" />
                <Input
                  type="number"
                  placeholder="Enter a phone number"
                  maxLength={16}
                  className="phoneNumber"
                />
              </div>
              <Input type="email" placeholder="Email" />
              <div className="address">
                <select>
                  <option>---------Chọn tỉnh thành phố--------</option>
                  {city.map((item) => (
                    <option>{item}</option>
                  ))}
                </select>
                <select>
                  <option>------Chọn quận huyện-----</option>
                  {distrist.map((item) => (
                    <option>{item}</option>
                  ))}
                </select>
                <select>
                  <option>------Chọn phường xã-----</option>
                  {ward.map((item) => (
                    <option>{item}</option>
                  ))}
                </select>
              </div>
              <Input placeholder="Note (Example: abcxyz)" />
            </div>
          </div>
          <div className="payment-form">
            <h3 className="payment-form-title">Hình thức thanh toán</h3>
            <Radio.Group onChange={onChange} value={value}>
              <Space direction="vertical">
                <Radio value={1}>COD - Thanh toán khi nhận hàng</Radio>
                <Radio value={2}>Thanh Toán MoMo</Radio>
                <Radio value={3}>Chuyển khoản qua ngân hàng</Radio>
              </Space>
            </Radio.Group>
            <button className="payment-form-btn" onClick={handlePayment}>
              THANH TOÁN
            </button>
          </div>
        </div>
        <div className="your-order">
          <h3>Đơn hàng</h3>
          <div className="product-infor">
            <table className="product-infor__table">
              <tr className="product-infor__table-up">
                <th className="">Sản phẩm:</th>
                <th>Số lượng:</th>
                <th>Thành tiền:</th>
              </tr>
              {cartStore.map((item) => {
                const nowTotal = new Intl.NumberFormat().format(
                  item.price * item.qty
                );
                total += item.price * item.qty;

                return (
                  <tr className="product-infor__table-down" key={item.id}>
                    <li className="pd-10">{item.name}</li>
                    <td className="table-down__qty pd-40">{item.qty}</td>
                    <td className="table-down__nowTotal">{nowTotal}.000 đ</td>
                  </tr>
                );
              })}
            </table>
            <div>
              <hr className="division" />
              <div className="your-order-total">
                <span className="your-order-total-text">Tổng cộng:</span>
                <span className="your-order-total-price your-order-total-price--red">
                  {new Intl.NumberFormat().format(total)}.000 đ
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default PaymentProduct;
