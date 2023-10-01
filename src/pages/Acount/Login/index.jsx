import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import inforImg from "../img/LOGIN-SIÊU THỊ NHẬT BẢN.png";
import { FacebookFilled, GooglePlusSquareFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../const/routes";
import { MyContext } from "../../../context";
import { useDispatch, useSelector } from "react-redux";
import { actFectchAllUser } from "../../../redux/features/users/userSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);

  const {
    userName,
    setUserName,
    phoneNumber,
    setPhoneNumber,
    email,
    setEmail,
    passWord,
    setPassWord,
    lgEmail,
    setLgEmail,
    lgPass,
    setLgPass,
  } = useContext(MyContext);

  const [isData, setIsData] = useState(false);

  const handleLgEmail = (e) => {
    let getLgEmail = e.target.value;
    setLgEmail(getLgEmail);
  };

  const handleLgPass = (e) => {
    let getLgPass = e.target.value;
    setLgPass(getLgPass);
  };

  const handleReset = () => {
    setEmail("");
    setPassWord("");
  };

  const handleLogin = () => {
    if (lgEmail !== "" && lgPass !== "") {
      setIsData(true);
      alert(`Đăng nhập thành công. Về trang chủ.`);
    } else {
      setIsData(false);
      alert(`Thông tin không chính xác. Vui lòng xác nhận lại.`);
    }
  };

  useEffect(() => {
    dispatch(actFectchAllUser(lgEmail));
    dispatch(actFectchAllUser(lgPass));
  }, [lgEmail, lgPass]);

  // function checkLogin(username, password) {
  //   const user = users.find(
  //     (user) => user.username === username && user.password === password
  //   );
  //   if (user) {
  //     console.log("ok");
  //   } else {
  //     console.log("sai");
  //   }
  // }
  // const username = lgEmail;
  // const password = lgPass;

  // const loginSuccess = checkLogin(username, password);

  // if (loginSuccess) {
  //   // Đăng nhập thành công - thực hiện các hành động cần thiết ở đây
  // } else {
  //   // Đăng nhập thất bại - có thể thông báo cho người dùng hoặc thực hiện xử lý khác
  // }

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
          <form className="login-container__form">
            <div className="login-container__form-email">
              <p className="login-container__form-title">
                Email<span style={{ color: "red" }}>*</span>
              </p>
              <input
                // value={userName}
                onChange={handleLgEmail}
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
                // value={passWord}
                onChange={handleLgPass}
                className="login-container__form-input"
                placeholder="Nhập mật khẩu"
                type="password"
              />
            </div>
            <a className="forget-pass" href="#">
              Quên mật khẩu?
            </a>
            <p>
              {/* {users.map((item) => {
                if (item.email == lgEmail && item.passWord == lgPass) {
                  <Link to={ROUTES.ALL_PRODUCT}>
                    <button
                      onClick={handleLogin}
                      className="login-container__form-loginbtn"
                    >
                      Đăng nhập
                    </button>
                  </Link>;
                } else {
                  <Link to={ROUTES.ACOUNT_LOGIN}>
                    <button
                      onClick={handleLogin}
                      className="login-container__form-loginbtn"
                    >
                      Đăng nhập
                    </button>
                  </Link>;
                }
              })} */}
              <Link to={ROUTES.ALL_PRODUCT}>
                <button
                  onClick={handleLogin}
                  className="login-container__form-loginbtn"
                >
                  Đăng nhập
                </button>
              </Link>
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
