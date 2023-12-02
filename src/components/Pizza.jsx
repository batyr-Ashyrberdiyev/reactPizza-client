import add_orange from "../img/add-orange.svg";
import React from "react";

import { addItem } from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function Pizza({ id, img, title, price, types, sizes, disabled }) {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cart.items.find((obj) => obj.id === id)
  );
  const typeNames = ["тонкое", "традиционное"];
  const [activeType, setActiveType] = React.useState(0);

  const addCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item = { id, title, price, img };

    dispatch(addItem(item));
  };

  return (
    <div className="pizza">
      <img src={img} width={260} alt="Pizza" />
      <div className="pizza__title h3">{title}</div>
      <div className="pizza__info">
        <div className="pizza__types">
          {types.map((typeId) => (
            <div
              key={typeId}
              onClick={() => setActiveType(typeId)}
              className={`pizza__type ${
                activeType === typeId
                  ? "active"
                  : "" || disabled
                  ? "disable"
                  : ""
              }`}
            >
              {typeNames[typeId]}
            </div>
          ))}
        </div>
        <div className="pizza__sizes">
          {sizes.map((size, i) => {
            <div key={i} className="pizza__size">
              {size} см.
            </div>;
          })}
        </div>
      </div>
      <div className="pizza__footer">
        <div className="pizza__price">от {price} руб.</div>
        <div className="pizza__btn" onClick={onClickAdd}>
          <img src={add_orange} alt="" />
          <p>Добавить {addCount > 0 && addCount}</p>
        </div>
      </div>
    </div>
  );
}

export default Pizza;
