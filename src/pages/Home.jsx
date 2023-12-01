import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import qs from "qs";

import { useSelector, useDispatch } from "react-redux";
import { setCategoryId, setFilters } from "../redux/slices/filterSlice";

import Pizza from "../components/Pizza";
import Sort from "../components/Sort";
import Skeleton from "../components/Skeleton";
import { AppContext } from "../components/context";

function Home({ searchValue }) {
  const { sortList } = React.useContext(AppContext);
  const { categoryId, sort } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const getCategory = categoryId ? `category=${categoryId}` : "";
  const getSearch = searchValue ? `&search=${searchValue}` : "";

  // React.useEffect(() => {
  //   console.log(window.location.search, "useEffect");
  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1));
  //     const sorting = sortList.find((obj) => obj.sortProperty === params.sort);

  //     dispatch(setFilters({ ...params, sorting }));

  //     console.log(params, sorting);
  //   }
  // }, []);

  React.useEffect(() => {
    setIsLoading(true);

    axios
      .get(
        `https://654e515bcbc325355742bd6a.mockapi.io/items?${getCategory}&sortBy=${sort.sortProperty}&order=asc${getSearch}`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sort.sortProperty, searchValue]);

  // React.useEffect(() => {
  //   const queryString = qs.stringify({
  //     sort: sort.sortProperty,
  //     categoryId,
  //   });

  //   navigate(`?${queryString}`);
  // }, [categoryId, sort]);

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
                  onClick={() => dispatch(setCategoryId(i))}
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
