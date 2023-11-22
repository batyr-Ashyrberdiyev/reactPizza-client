import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortType } from "../redux/slices/filterSlice";

import arrow from "../img/arrow.svg";

function Sort() {
  const dispatch = useDispatch();
  const sortType = useSelector((state) => state.filter.type);

  const [open, setOpen] = React.useState(false);
  const [flip, setFlip] = React.useState(false);
  const sortText = [
    { name: "популярность", sort: "rating" },
    { name: "цена", sort: "price" },
    { name: "алфавит", sort: "title" },
  ];

  const onSortText = () => {
    setFlip(!flip);
    setOpen(!open);
  };

  const onClickListItem = (obj) => {
    dispatch(setSortType(obj));
    setOpen(false);
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
          {open && (
            <div className="sort__block">
              {sortText.map((obj, i) => (
                <div
                  key={i}
                  className={`sort__text ${
                    sortType.sort === obj.sort && "sort-active"
                  }`}
                  onClick={() => onClickListItem(obj)}
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
