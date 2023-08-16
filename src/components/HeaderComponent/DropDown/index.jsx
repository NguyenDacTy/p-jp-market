import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { UnorderedListOutlined } from "@ant-design/icons";
import heart from "../../../img/list icon/heart.png";
import potion from "../../../img/list icon/potion.png";
import hot from "../../../img/list icon/hot2.png";
import newp from "../../../img/list icon/new.png";
import beauty from "../../../img/list icon/beauty.png";
import shower from "../../../img/list icon/shower-bottle2.png";
import allp from "../../../img/list icon/all-product.jpg";
import { ROUTES } from "../../../const/routes";

const DropDown = () => {
  return (
    <Dropdown
      trigger={
        <button className="all-product">
          {" "}
          <UnorderedListOutlined
            style={{ fontSize: "14px", color: "#fff" }}
          />{" "}
          <span className="all-product-title">Danh mục sản phẩm</span>
        </button>
      }
      menu={[
        <div className="all-product-menu">
          <li>
            <Link to={ROUTES.ALL_PRODUCT} className="all-product__list">
              <img src={allp} className="list-icon" />
              Tất cả sản phẩm
            </Link>
          </li>
          <li>
            <Link to={ROUTES.HEART_PRODUCT} className="all-product__list">
              <img src={heart} className="list-icon" />
              Chăm sóc sức khỏe
            </Link>
          </li>
          <li>
            <Link to={ROUTES.POTION_PRODUCT} className="all-product__list">
              <img src={potion} className="list-icon" />
              Thực phẩm chức năng
            </Link>
          </li>
          <li>
            <Link to={ROUTES.HOT_PRODUCT} className="all-product__list">
              <img src={hot} className="list-icon" />
              Sản phẩm bán chạy
            </Link>
          </li>
          <li>
            <Link to={ROUTES.NEW_PRODUCT} className="all-product__list">
              <img src={newp} className="list-icon" />
              Sản phẩm mới
            </Link>
          </li>
          <li>
            <Link to={ROUTES.BEAUTY_PRODUCT} className="all-product__list">
              <img src={beauty} className="list-icon" />
              Thực phẩm làm đẹp
            </Link>
          </li>
          <li>
            <Link to={ROUTES.BODY_PRODUCT} className="all-product__list">
              <img src={shower} className="list-icon" />
              Chăm sóc cơ thể
            </Link>
          </li>
        </div>,
      ]}
    />
  );
};

const Dropdown = ({ trigger, menu }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdown">
      {React.cloneElement(trigger, {
        onClick: handleOpen,
      })}
      {open ? (
        <ul className="menu">
          {menu.map((menuItem, index) => (
            <li key={index} className="menu-item">
              {React.cloneElement(menuItem, {
                onClick: () => {
                  setOpen(false);
                },
              })}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default DropDown;
