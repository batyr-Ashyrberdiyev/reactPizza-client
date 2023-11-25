import logo from "../img/logo.png";
import cart from "../img/cart.svg";
import { Link } from "react-router-dom";

import Input from "./Input";

function Header() {
  return (
    <div className="inner-container">
      <header className="header">
        <Link to="/">
          <div className="header__col">
            <img
              className="logo"
              src={logo}
              width={40}
              height={40}
              alt="LOGO"
            />
            <div className="header__link">
              <div className="h2 header__logo">REACT PIZZA</div>
              <div className="header__text">Самая вкусная пицца на земле</div>
            </div>
          </div>
        </Link>
        <Input />
        <div className="header__col">
          <Link to="/drawer">
            <button className="header__btn">
              <div className="header__price">520 Р.</div>
              <div className="header__cart">
                <span>
                  <img src={cart} alt="" /> <p>3</p>
                </span>
              </div>
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
