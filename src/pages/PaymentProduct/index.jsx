import React, { useState } from "react";
import "./style.css";
import HeaderComponent from "../../components/HeaderComponent";
import FooterComponent from "../../components/FooterComponent";
import { Input, Radio, Space, Table } from "antd";


    
const PaymentProduct = () => {
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
    const data = [
      {
        key: "1",
        name: "Nước uống Collagen Shinnippai Top 5.000mg (Hộp 10 chai x 50ml)",
        quantity: 1,
        price: "554.000 đ",
      },
    ];
    const onChange = (e) => {
      console.log("radio checked", e.target.value);
      setValue(e.target.value);
    };
  return (
    <div>
      <HeaderComponent />
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
            {/* <Button style={{display:'flex', alignItems: 'center'}} ><Input type="radio" style={{width: '15px'}} /><span>COD - Thanh toán khi nhận hàng</span></Button>
            <Input type="radio" />
            <Input type="radio" />
            <Input type="radio" /> */}
            <button className="payment-form-btn">THANH TOÁN</button>
          </div>
        </div>
        <div className="your-order">
          <h3>Đơn hàng</h3>
          <Table columns={columns} dataSource={data} />
          <div>
            <div className="your-order-total">
              <span className="your-order-total-text">Tạm tính</span>
              <span className="your-order-total-price">554.000 đ</span>
            </div>
            <hr className="division" />
            <div className="your-order-total">
              <span className="your-order-total-text">Tổng cộng</span>
              <span className="your-order-total-price your-order-total-price--red">
                554.000 đ
              </span>
            </div>

            {/* BEM : block element modifier */}
            {/* <div className="table" >
              <div className="table__mouse">Chuot</div>
              <div className="table__computer table__computer--red">may tinh</div>
            </div> */}
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default PaymentProduct;
