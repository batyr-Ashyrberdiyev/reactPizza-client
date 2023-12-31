import logo from "../img/logo.png";
import cart from "../img/cart.svg";
import Input from "./Input";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const { totalPrice, items } = useSelector((state) => state.cart);

  const totalCount = items.reduce((sum, obj) => obj.count + sum, 0);

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
              <div className="header__price">{totalPrice} Р.</div>
              <div className="header__cart">
                <span>
                  <svg
                    className="header__icon-cart"
                    width="20"
                    height="20"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.33333 16.3334C7.06971 16.3334 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3334 6.33333 16.3334Z"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.3333 16.3334C15.0697 16.3334 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3334 14.3333 16.3334Z"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.78 5.00002H16.3333L15.2133 10.5934C15.1524 10.9003 14.9854 11.176 14.7416 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83333C6.50779 11.6694 6.19248 11.553 5.94687 11.3393C5.70125 11.1256 5.54231 10.8295 5.5 10.5067L4.48666 2.82669C4.44464 2.50618 4.28761 2.21185 4.0448 1.99847C3.80198 1.78508 3.48992 1.66718 3.16666 1.66669H1.66666"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="header__btn-line"></div>
                  <p>{totalCount}</p>
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
