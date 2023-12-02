import React from "react";

import drawer_ from "../img/drawer_.svg";
import drawer_add from "../img/drawer_add.svg";
import remove from "../img/drawer_remove.svg";

import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, onMinus } from "../redux/slices/cartSlice";

const CartItem = ({ id, title, price, img, type, count }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const onClickPlus = () => {
    dispatch(addItem({ id }));
  };

  const onRemove = () => {
    console.log("click");
    dispatch(removeItem(id));
  };

  const minusItem = () => {
    dispatch(onMinus(id));
  };

  return (
    <div className="drawer__pizza">
      <img src={img} className="cup" width={100} alt="Pizza" />
      <div className="drawer__info">
        <div className="drawer__name">{title}</div>
        <div className="drawer__text">{type}</div>
      </div>
      <div className="drawer__count">
        <img className="cup" src={drawer_} alt="" onClick={minusItem} />
        <p>{count}</p>
        <img className="cup" src={drawer_add} alt="" onClick={onClickPlus} />
      </div>
      <div className="drawer__price">{price} Руб.</div>
      <img className="cup" src={remove} alt="" onClick={onRemove} />
    </div>
  );
};

export default CartItem;
