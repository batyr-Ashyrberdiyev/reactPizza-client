import React from "react";

import Header from "../components/Header";
import Pizza from "../components/Pizza";
import Sort from "../components/Sort";
import Skeleton from "../components/Skeleton";

import { AppContext } from "../components/context";

function Home() {
  const category = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const [sortActive, setSortActive] = React.useState({
    name: "популярность",
    sort: "rating",
  });
  const [activeCategory, setActiveCategory] = React.useState(0);
  const [items, setItems] = React.useState([]);
  const [cartPizza, setCartPizza] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://654e515bcbc325355742bd6a.mockapi.io/items?category=" +
        activeCategory
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [activeCategory, sortActive]);

  return (
    <>
      <Header active />
      <div className="home">
        <div className="inner-container">
          <div className="home__header">
            <div className="categories">
              {category.map((item, i) => (
                <div
                  key={i}
                  className={`category ${activeCategory === i && "active"}`}
                  onClick={() => setActiveCategory(i)}
                >
                  {item}
                </div>
              ))}
            </div>
            <Sort
              sortActive={sortActive}
              clickSort={(id) => setSortActive(id)}
            />
          </div>
          <h1 className="pizzas__title h1">Все пиццы</h1>
          <div className="pizzas">
            <div className="pizzas__block">
              {isLoading
                ? [...new Array(4)].map((_, i) => <Skeleton key={i} />)
                : items.map((item) => <Pizza key={item.title} {...item} />)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;