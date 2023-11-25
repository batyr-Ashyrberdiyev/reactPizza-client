import React from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { setCategoryId, setSortType } from "../redux/slices/filterSlice";

import Pizza from "../components/Pizza";
import Sort from "../components/Sort";
import Skeleton from "../components/Skeleton";

function Home({ searchValue }) {
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.type);
  const dispatch = useDispatch();

  const category = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const getCategory = categoryId > 0 ? `category=${categoryId}` : "";
  const getSearch = searchValue > 0 ? `&search=${searchValue}` : "";

  React.useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://654e515bcbc325355742bd6a.mockapi.io/items?${getCategory}&sortBy=${sortType.sort}&order=desc${getSearch}`
      )
      .then((arr) => {
        setItems(arr.data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue]);

  return (
    <>
      <div className="home">
        <div className="inner-container">
          <div className="home__header">
            <div className="categories">
              {category.map((item, i) => (
                <div
                  key={i}
                  className={`category ${categoryId === i && "active"}`}
                  onClick={(i) => dispatch(setCategoryId(i))}
                >
                  {item}
                </div>
              ))}
            </div>
            <Sort />
          </div>
          <h1 className="pizzas__title h1">Все пиццы</h1>
          <div className="pizzas">
            <div className="pizzas__block">
              {isLoading
                ? [...new Array(3)].map((_, i) => <Skeleton key={i} />)
                : items
                    .filter((pizza) => {
                      if (
                        pizza.title
                          .toLowerCase()
                          .includes(searchValue.toLowerCase())
                      ) {
                        return true;
                      }

                      return false;
                    })
                    .map((item) => <Pizza key={item.title} {...item} />)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
