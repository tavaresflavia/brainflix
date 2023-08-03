import "./Nav.scss";
import { Link } from "react-router-dom";
import logoSrc from "../../assets/images/BrainFlix-logo.svg";
import Avatar from "../Avatar/Avatar.js";
import Button from "../Button/Button.js";
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
          <input className="nav__search"
              type="text"
              placeholder="Search">
          </input>
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
