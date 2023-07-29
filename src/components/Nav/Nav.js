import "./Nav.scss";
import logoSrc from "../../assets/images/BrainFlix-logo.svg";
import Avatar from "../Avatar/Avatar.js";
import Button from "../Button/Button.js";
import searchBtn from "../../assets/images/search.svg";

const Nav = () => {
  return (
    <header>
      <nav className="nav">
        <div className="nav__logo-box">
          <img className="nav__logo" src={logoSrc} alt="logo" />
        </div>
        <div className="nav__interactive-bar">
          <div className="search-bar">
            <img
              src={searchBtn}
              className="search-bar__icon"
              alt="magnifying glass"></img>
            <input
              className="search-bar__input"
              type="search"
              placeholder="Search"
            />
          </div>
          <Avatar />
          <Button />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
