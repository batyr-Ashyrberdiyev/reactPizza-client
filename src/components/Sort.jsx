import React from "react";

import arrow from "../img/arrow.svg";

function Sort({ sortType, onChangeSort }) {
  const [sortOpen, setSortOpen] = React.useState(false);
  const [flip, setFlip] = React.useState(false);
  const sortText = [
    { name: "популярность", sort: "rating" },
    { name: "цена", sort: "price" },
    { name: "алфавит", sort: "title" },
  ];

  // const onSortItem = (i) => {
  //   setSortActive(i);
  // };

  const onSortText = () => {
    setFlip(!flip);
    setSortOpen(!sortOpen);
    console.log(sortType);
  };

  const changeSort = (obj) => {
    onChangeSort(obj);
    setSortOpen(false);
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
          <span onClick={() => onSortText()}>{sortType.name}</span>
          {sortOpen && (
            <div className="sort__block">
              {sortText.map((obj, i) => (
                <div
                  key={i}
                  className={`sort__text ${
                    sortType.sort === obj.sort && "sort-active"
                  }`}
                  onClick={() => changeSort(obj)}
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
