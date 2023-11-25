import React from "react";
import debounce from "lodash.debounce";

import { AppContext } from "./context";
import clear from "../img/close.png";

function Input() {
  const { setSearchValue } = React.useContext(AppContext);

  const [value, setValue] = React.useState("");

  const inputRef = React.useRef();

  const updateValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 400),
    []
  );

  const onClear = () => {
    setValue("");
    setSearchValue("");
    inputRef.current.focus();
  };

  const changeInput = (e) => {
    setValue(e.target.value);
    updateValue(e.target.value);
  };

  return (
    <div className="input__block">
      <input
        ref={inputRef}
        className="header__input"
        type="text"
        placeholder="Поиск пицц"
        onChange={changeInput}
        value={value}
      />
      {value && <img onClick={onClear} width={10} src={clear} alt="clear" />}
    </div>
  );
}

export default Input;
