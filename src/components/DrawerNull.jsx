import React from "react";
import { Link } from "react-router-dom";

import cartImg from "../img/cartImg.svg";

const DrawerNull = () => {
  return (
    <div className="null">
      <div className="null__wrapper">
        <h2 className="null__title">Корзина пустая</h2>
        <h4 className="null__text">
          Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать
          пиццу, перейди на главную страницу.
        </h4>
        <img src={cartImg} alt="" className="null__img" />
        <Link to="/">
          <button className="null__btn">Вернуться назад</button>
        </Link>
      </div>
    </div>
  );
};

export default DrawerNull;
