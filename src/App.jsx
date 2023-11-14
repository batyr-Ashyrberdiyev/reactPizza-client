import React from "react";
import "./styles/main.scss";
import Home from "./pages/Home";
import Drawer from "./pages/Drawer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

import pizza1 from "./img/pizza/1.png";
import pizza2 from "./img/pizza/2.png";
import pizza3 from "./img/pizza/3.png";
import pizza4 from "./img/pizza/4.png";

import { AppContext } from "./components/context";

// { pizzas
//   img: pizza1,
//   title: "Чизбургер-пицца",
//   types: [0, 1],
//   sizes: [26, 30, 40],
//   price: 395,
// },
// {
//   img: pizza2,
//   title: "Сырная",
//   types: [0, 1],
//   sizes: [26, 30, 40],
//   price: 395,
// },
// {
//   img: pizza3,
//   title: "Креветки по азиатски",
//   types: [0, 1],
//   disabled: true,
//   sizes: [26, 30, 40],
//   price: 395,
// },
// {
//   img: pizza4,
//   title: "Сырный цыпленок",
//   types: [0, 1],
//   sizes: [26, 30, 40],
//   price: 395,
// },

function App() {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <AppContext.Provider value={{}}>
      <div className="bg">
        <div className="container">
          <div className="wrapper">
            <Header searchValue={searchValue} setSearchValue={setSearchValue} />
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                  />
                }
              ></Route>
              <Route path="/drawer" element={<Drawer />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
