import React from "react";
import "./style.css";
import { FacebookFilled, GooglePlusSquareFilled } from "@ant-design/icons";
import inforImg from "../img/registerLogo.png";
import HeaderComponent from "../../../components/HeaderComponent";
import FooterComponent from "../../../components/FooterComponent";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../const/routes";

const RegisterPage = () => {
  return (
    <div>
      <HeaderComponent />
      <div>
        <div className="register-container">
          <div className="register-container_left">
            <img src={inforImg} />
          </div>
          <div className="register-container_right">
            <div className="infor-right__title">
              <button className="infor-right__title-login">
                <Link
                  to={ROUTES.ACOUNT_LOGIN}
                  style={{ textDecoration: "none" }}
                >
                  ĐĂNG NHẬP
                </Link>
              </button>
              <button className="infor-right__title-resiger">
                <Link
                  to={ROUTES.ACOUNT_REGISTER}
                  style={{ textDecoration: "none" }}
                >
                  ĐĂNG KÍ
                </Link>
              </button>
            </div>
            <form className="register-container__form">
              <div className="register-container__form-email">
                <p className="register-container__form-title">
                  Họ và tên<span style={{ color: "red" }}>*</span>
                </p>
                <input
                  className="register-container__form-input"
                  placeholder="Nhập họ và tên"
                />
              </div>
              <div className="register-container__form-email">
                <p className="register-container__form-title">
                  Số điện thoại<span style={{ color: "red" }}>*</span>
                </p>
                <input
                  className="register-container__form-input"
                  placeholder="Nhập số điện thoại"
                  type="number"
                />
              </div>
              <div className="register-container__form-email">
                <p className="register-container__form-title">
                  Email<span style={{ color: "red" }}>*</span>
                </p>
                <input
                  className="register-container__form-input"
                  placeholder="Nhập địa chỉ Email"
                  type="email"
                />
              </div>
              <div className="register-container__form-password">
                <p className="register-container__form-title">
                  Mật khẩu<span style={{ color: "red" }}>*</span>
                </p>
                <input
                  className="register-container__form-input"
                  placeholder="Nhập mật khẩu"
                  type="password"
                />
              </div>
              <a className="forget-pass" href="#">
                Quên mật khẩu?
              </a>
              <p>
                <button className="register-container__form-registerbtn">
                  Đăng nhập
                </button>
              </p>
            </form>
            <p className="register-container__note fs14">
              Japan Market cam kết bảo mật và không bao giờ chia sẻ thông tin mà
              chưa có sự đồng ý của bạn.
            </p>
            <p className="register-container__otherRegister fs13">
              Hoặc đăng nhập qua
            </p>
            <div className="register-container__btn">
              <button className="register-container__btn-fb">
                <FacebookFilled style={{ fontSize: "20px" }} />
                Facebook
              </button>
              <button className="register-container__btn-gg">
                <GooglePlusSquareFilled style={{ fontSize: "20px" }} />
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default RegisterPage;
