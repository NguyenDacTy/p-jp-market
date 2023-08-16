import React from "react";
import "./style.css";
import inforImg from "../img/LOGIN-SIÊU THỊ NHẬT BẢN.png";
import { FacebookFilled, GooglePlusSquareFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../const/routes";

const LoginPage = () => {
  return (
    <div>
      <div className="login-container">
        <div className="login-container-left">
          <img src={inforImg} />
        </div>
        <div className="login-container-right">
          <div className="infor-right__title">
            <button className="infor-right__title-login">
              <Link to={ROUTES.ACOUNT_LOGIN} style={{ textDecoration: "none" }}>
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
          <form className="login-container__form">
            <div className="login-container__form-email">
              <p className="login-container__form-title">
                Email<span style={{ color: "red" }}>*</span>
              </p>
              <input
                className="login-container__form-input"
                placeholder="Nhập địa chỉ Email"
                type="email"
              />
            </div>
            <div className="login-container__form-password">
              <p className="login-container__form-title">
                Mật khẩu<span style={{ color: "red" }}>*</span>
              </p>
              <input
                className="login-container__form-input"
                placeholder="Nhập mật khẩu"
                type="password"
              />
            </div>
            <a className="forget-pass" href="#">
              Quên mật khẩu?
            </a>
            <p>
              <button className="login-container__form-loginbtn">
                Đăng nhập
              </button>
            </p>
          </form>
          <p className="login-container__note fs14">
            Japan Market cam kết bảo mật và không bao giờ chia sẻ thông tin mà
            chưa có sự đồng ý của bạn.
          </p>
          <p className="login-container__otherLogin fs13">Hoặc đăng nhập qua</p>
          <div className="login-container__btn">
            <button className="login-container__btn-fb">
              <FacebookFilled style={{ fontSize: "20px" }} />
              Facebook
            </button>
            <button className="login-container__btn-gg">
              <GooglePlusSquareFilled style={{ fontSize: "20px" }} />
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
