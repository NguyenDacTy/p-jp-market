import React, { useState } from "react";
import "./style.css";
import {
  CheckCircleTwoTone,
  FacebookOutlined,
  GlobalOutlined,
  HomeTwoTone,
  InstagramOutlined,
  SearchOutlined,
  ShopTwoTone,
  YoutubeOutlined,
} from "@ant-design/icons";
import appStore from "../../img/appStore-dl2.png";
import ggPlay from "../../img/ggplay-dl.png";
import money from "../../img/money-payment.png";
import visa from "../../img/visa.png";
import masterCard from "../../img/logo-mastercard.png";
import iBanking from "../../img/internet-banking.png";
import vnpay from "../../img/logo-vnpay.png";
import momo from "../../img/LogoMoMoTransparent.png";
import ghtk from "../../img/ghtk.png";
import ghn from "../../img/ghn.png";
import vnpost from "../../img/vnpost.jpg";
import ahamove from "../../img/ahamove.png";
import logship from "../../img/logo-logship.jpg";

const FooterComponent = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-container__infor-market pd-60">
            <p className="infor-market__title">SIÊU THỊ NHẬT BẢN</p>
            <div className="infor-market__lists">
              <div className="infor-market__list">
                <HomeTwoTone className="blues" />
                <div>
                  <span>
                    <b>Văn phòng tại Việt Nam: </b>
                    <span>
                      Tòa Nhà Trường Thịnh Group, 76 Nguyễn Háo Vĩnh, P. Tân
                      Quý, Q. Tân Phú, TP. HCM
                    </span>
                  </span>
                  <p>
                    <b>
                      Hotline CSKH: <a href="#">0975 800 600</a>
                    </b>
                  </p>
                  <p>
                    <b>
                      Hotline khiếu nại: <a href="#">(028) 7108 8889</a>
                    </b>
                  </p>
                </div>
              </div>
              <div className="infor-market__list">
                <GlobalOutlined className="blues" />
                <div>
                  <b>Văn phòng tại Nhật Bản: </b>
                  <span>Kanagawa Ken Ebina - Shi Nakana, Japan</span>
                </div>
              </div>
              <div className="infor-market__list">
                <ShopTwoTone className="blues" />
                <div>
                  <b>Cửa hàng 1: </b>
                  <span>
                    36D Phan Đăng Lưu, phường 5, Phú Nhuận, Hồ Chí Minh
                  </span>
                  <p>
                    <b>Điện thoại: </b>
                    <a href="#">(028) 7100 1779</a>
                  </p>
                </div>
              </div>
              <div className="infor-market__list">
                <ShopTwoTone className="blues" />
                <div>
                  <b>Cửa hàng 2: </b>
                  <span>
                    353A Tân Kỳ Tân Quý, Tân Quý, Tân Phú, Hồ Chí Minh
                  </span>
                  <p>
                    <b>Điện thoại: </b>
                    <a href="#">(028) 7100 8006</a>
                  </p>
                </div>
              </div>
              <div className="infor-market__list">
                <CheckCircleTwoTone className="blues" />
                <div>
                  <b>Giấy CNĐKDN: </b>
                  <span>0313518985</span>
                </div>
              </div>
            </div>
            <div className="infor-market__icons">
              <FacebookOutlined
                style={{ color: "blue" }}
                className="infor-market__icon"
              />
              <YoutubeOutlined
                style={{ color: "red" }}
                className="infor-market__icon"
              />
              <InstagramOutlined
                style={{ color: "purple" }}
                className="infor-market__icon"
              />
            </div>
          </div>
          <div className="footer-container__support-client pd-60">
            <p className="infor-market__title">HỔ TRỢ KHÁCH HÀNG</p>
            <ul>
              <li>
                <a href="#">Về chúng tôi</a>
              </li>
              <li>
                <a href="#">Phương thức thanh toán</a>
              </li>
              <li>
                <a href="#">Chính sách bảo hành</a>
              </li>
              <li>
                <a href="#">Chính sách đổi trả và hoàn tiền</a>
              </li>
              <li>
                <a href="#">Quyền lợi thành viên</a>
              </li>
              <li>
                <a href="#">Câu hỏi thường gặp</a>
              </li>
            </ul>
            <p>CHÍNH SÁCH</p>
            <ul>
              <li>
                <a href="#">Chính sách vận chuyển</a>
              </li>
              <li>
                <a href="#">Điều khoản giao dịch</a>
              </li>
              <li>
                <a href="#">Thời gian giao hàng</a>
              </li>
              <li>
                <a href="#">Chính sách bảo mật</a>
              </li>
              <li>
                <a href="#">Quy định bán hàng trên Website</a>
              </li>
            </ul>
          </div>
          <div className="footer-container__payment-method">
            <p className="infor-market__title">TẢI APP</p>
            <div className="payment-method__lists mb50">
              <ul>
                <li>
                  <img src={appStore} />
                </li>
                <li>
                  <img src={ggPlay} />
                </li>
              </ul>
            </div>
            <p>THANH TOÁN</p>
            <div className="payment-method__pay-list mb50">
              <ul>
                <li>
                  <img src={money} />
                </li>
                <li>
                  <img src={visa} />
                </li>
                <li>
                  <img src={masterCard} />
                </li>
                <li>
                  <img src={iBanking} />
                </li>
                <li>
                  <img src={vnpay} />
                </li>
                <li>
                  <img src={momo} />
                </li>
              </ul>
            </div>
            <p>VẬN CHUYỂN</p>
            <div className="payment-method__pay-list">
              <ul>
                <li>
                  <img src={ghtk} />
                </li>
                <li>
                  <img src={ghn} />
                </li>
                <li>
                  <img src={vnpost} />
                </li>
                <li>
                  <img src={ahamove} />
                </li>
                <li>
                  <img src={logship} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="footer-c">
        © 2017 - Bản quyền của Công Ty Cổ Phần JPM Việt Nam - Japanmarket.vn
      </p>
    </>
  );
};

export default FooterComponent;
