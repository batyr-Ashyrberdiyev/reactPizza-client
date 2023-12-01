import React from "react";

import drawer_ from "../img/drawer_.svg";
import drawer_add from "../img/drawer_add.svg";
import remove from "../img/drawer_remove.svg";

const CartItem = ({ title, price, img, type, count }) => {
  return (
    <div className="drawer__pizza">
      <img src={img} width={100} alt="Pizza" />
      <div className="drawer__info">
        <div className="drawer__name">{title}</div>
        <div className="drawer__text">{type}</div>
      </div>
      <div className="drawer__count">
        <img src={drawer_} alt="" />
        <p>{count}</p>
        <img src={drawer_add} alt="" />
      </div>
      <div className="drawer__price">{price} Руб.</div>
      <img src={remove} alt="" />
    </div>
  );
};

export default CartItem;
