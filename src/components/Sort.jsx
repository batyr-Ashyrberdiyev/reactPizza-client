import React from "react";

import arrow from "../img/arrow.svg";

function Sort({ sortActive, setSortActive }) {
  const [sortOpen, setSortOpen] = React.useState(false);
  const [flip, setFlip] = React.useState(false);
  const sortText = [
    { name: "популярность", sort: "rating" },
    { name: "цена", sort: "price" },
    { name: "алфавит", sort: "title" },
  ];

  const sortName = sortText[sortActive].name;

  const onSortItem = (i) => {
    setSortActive(i);
  };

  const onSortText = () => {
    setFlip(!flip);
    setSortOpen(!sortOpen);
    console.log(sortName);
  };

  return (
    <div className="sort">
      <div className="sort__header">
        <img
          className={`sort__arrow ${flip && "flip"}`}
          src={arrow}
          width={15}
          alt="arrow"
        />
        <div className="h5">
          Сортировка по:
          <span onClick={() => onSortText()}>{` ${sortText}`}</span>
          {sortOpen && (
            <div className="sort__block">
              {sortText.map((obj, i) => (
                <div
                  key={i}
                  className={`sort__text ${
                    sortActive.sort === obj.sort && "sort-active"
                  }`}
                  onClick={() => onSortItem(i)}
                >
                  {obj.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sort;
