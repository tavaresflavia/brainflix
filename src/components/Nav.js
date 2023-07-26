import "./Nav.scss";
import logoSrc from "../assets/images/BrainFlix-logo.svg";
import avatarSrc from "../assets/images/Mohan-muruge.jpg";
import uploadBtn from "../assets/images/upload.svg";
import searchBtn from "../assets/images/search.svg";


const Nav = () => {
  return (
    <header>
      <nav className="nav">
        <div className="nav__logo-box">
          <img className="nav__logo" src={logoSrc} alt="logo" />
        </div>
        <div className="nav__interactive-bar">
          <form className="nav__form">
          <button className="nav__search-btn"><img src= {searchBtn} className="nav__search-icon" alt="magnifying glass"></img></button>
          <input className="nav__search-input" type="search" placeholder="Search" />
          </form>
          <img className="nav__avatar" src={avatarSrc} alt="avatar" />
          <button className="nav__upload-btn" >
            <img src={uploadBtn} alt="upload icon" />
            UPLOAD
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
