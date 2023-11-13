import add_orange from "../img/add-orange.svg";
import React from "react";

function Pizza({ img, title, price, types, sizes, disabled, addInCart }) {
  const typeNames = ["тонкое", "традиционное"];
  const [activeType, setActiveType] = React.useState(0);
  // const [disableType, setDisableType] = React.useState();

  const onAdd = () => {
    addInCart({ img, title, price });
    console.log(title);
  };

  return (
    <div className="pizza">
      <img src={img} width={260} alt="Pizza" />
      <div className="pizza__title h3">{title}</div>
      <div className="pizza__info">
        <div className="pizza__types">
          {types.map((typeId) => (
            <div
              key={types.title}
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
        <div className="pizza__btn" onClick={() => onAdd()}>
          <img src={add_orange} alt="" />
          <p>Добавить</p>
        </div>
      </div>
    </div>
  );
}

export default Pizza;
