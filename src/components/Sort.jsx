import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../redux/slices/filterSlice";

import { AppContext } from "./context";
import arrow from "../img/arrow.svg";

function Sort() {
  const { sortList } = React.useContext(AppContext);
  const sort = useSelector((state) => state.filter.sort);
  const dispatch = useDispatch();
  const sortRef = React.useRef();

  const [open, setOpen] = React.useState(false);
  const [flip, setFlip] = React.useState(false);

  const onSortText = () => {
    setFlip(!flip);
    setOpen(!open);
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setOpen(false);
        setFlip(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  const onClickListItem = (obj) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  return (
    <div className="sort" ref={sortRef}>
      <div className="sort__header">
        <img
          className={`sort__arrow ${flip && "flip"}`}
          src={arrow}
          width={15}
          alt="arrow"
        />
        <div className="h5">
          Сортировка по:
          <span onClick={() => onSortText()}>{sort.name}</span>
          {open && (
            <div className="sort__block">
              {sortList.map((obj, i) => (
                <div
                  key={obj.sortProperty}
                  className={`sort__text ${
                    sort.sortProperty === obj.sortProperty && "sort-active"
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
