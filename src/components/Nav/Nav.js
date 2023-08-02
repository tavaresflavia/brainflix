import "./Nav.scss";
import { Link } from "react-router-dom";
import logoSrc from "../../assets/images/BrainFlix-logo.svg";
import Avatar from "../Avatar/Avatar.js";
import Button from "../Button/Button.js";
import searchBtn from "../../assets/images/search.svg";
import uploadIcon from "../../assets/images/upload.svg";

const Nav = () => {
  return (
    <header>
      <nav className="nav">
        <div className="nav__logo-box">
          <Link className="nav__link" to="/">
            <img className="nav__logo" src={logoSrc} alt="logo" />
          </Link>
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
          <Link className="nav__link" to="/upload">
            <Button
              location="nav"
              iconSrc={uploadIcon}
              altText="upload icon"
              innerText="UPLOAD"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
