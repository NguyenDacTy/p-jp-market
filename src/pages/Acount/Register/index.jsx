import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { FacebookFilled, GooglePlusSquareFilled } from "@ant-design/icons";
import inforImg from "../img/registerLogo.png";
import HeaderComponent from "../../../components/HeaderComponent";
import FooterComponent from "../../../components/FooterComponent";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../const/routes";
import { MyContext } from "../../../context";
import { useDispatch } from "react-redux";
import { actCreateNewUser } from "../../../redux/features/users/userSlice";

const RegisterPage = () => {
  const [isData, setIsData] = useState(false);
  const {
    userName,
    setUserName,
    phoneNumber,
    setPhoneNumber,
    email,
    setEmail,
    passWord,
    setPassWord,
  } = useContext(MyContext);
  const dispatch = useDispatch();

  const handleUserName = (e) => {
    let getUserName = e.target.value;
    if (getUserName !== "") {
      setUserName(getUserName);
    }
  };
  const handlePhoneNumber = (e) => {
    let getPhoneNumber = e.target.value;
    if (getPhoneNumber !== "") {
      setPhoneNumber(getPhoneNumber);
    }
  };
  const handleEmail = (e) => {
    let getEmail = e.target.value;
    if (getEmail !== "") {
      setEmail(getEmail);
    }
  };
  const handlePassWord = (e) => {
    let getPassword = e.target.value;
    if (getPassword !== "") {
      setPassWord(getPassword);
    }
  };

  const handleReset = () => {
    setEmail("");
    setPassWord("");
  };

  const handleRegister = () => {
    if (email !== "" && passWord !== "") {
      setIsData(true);
      dispatch(
        actCreateNewUser({
          userName: userName,
          phoneNumber: phoneNumber,
          email: email,
          passWord: passWord,
        })
      );
      alert(`Đăng kí thành công. Vui lòng đăng nhập.`);
    } else {
      setIsData(false);
      alert(`Vui lòng điền vào trường còn trống.`);
    }
  };

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
              <button
                className="infor-right__title-resiger"
                onClick={handleReset}
              >
                <Link
                  to={ROUTES.ACOUNT_REGISTER}
                  style={{ textDecoration: "none" }}
                >
                  ĐĂNG KÍ
                </Link>
              </button>
            </div>
            <form className="register-container__form" method="post">
              <div className="register-container__form-email">
                <p className="register-container__form-title">
                  Họ và tên<span style={{ color: "red" }}>*</span>
                </p>
                <input
                  className="register-container__form-input"
                  placeholder="Nhập họ và tên"
                  type="text"
                  onChange={handleUserName}
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
                  onChange={handlePhoneNumber}
                />
              </div>
              <div className="register-container__form-email">
                <p className="register-container__form-title">
                  Email<span style={{ color: "red" }}>*</span>
                </p>
                <input
                  onChange={handleEmail}
                  name="email"
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
                  onChange={handlePassWord}
                  className="register-container__form-input"
                  placeholder="Nhập mật khẩu"
                  type="password"
                  name="passWord"
                />
              </div>
              <a className="forget-pass" href="#">
                Quên mật khẩu?
              </a>
              <p>
                {isData && (
                  <Link to={ROUTES.ACOUNT_LOGIN}>
                    <button
                      onClick={handleRegister}
                      className="register-container__form-registerbtn"
                    >
                      Đăng kí
                    </button>
                  </Link>
                )}
                {!isData && (
                  <Link to={ROUTES.ACOUNT_REGISTER}>
                    <button
                      onClick={handleRegister}
                      className="register-container__form-registerbtn"
                    >
                      Đăng kí
                    </button>
                  </Link>
                )}

                {/* <Link to={ROUTES.ACOUNT_LOGIN}>
                  <button
                    onClick={handleRegister}
                    className="register-container__form-registerbtn"
                  >
                    Đăng kí
                  </button>
                </Link> */}
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
