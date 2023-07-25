import "./Nav.scss";

const Nav = () => {
  return (
    <header>
      <nav>
        <div class="nav__logo-box">
          <img
            class="nav__logo"
            src="./BrainFlix-Package-Sprint-1/3.0 - Assets/Logo/BrainFlix-logo.svg"
            alt="logo"
          />
        </div>
        <div class="nav__search-box">
          <input class="nav__search" type="search" />
          <img
            class="nav__avatar"
            src="./BrainFlix-Package-Sprint-1/3.0 - Assets/Images/Mohan-muruge.jpg"
            alt="avatar"
          />
          <button class="nav__button">
            <img
              src="./BrainFlix-Package-Sprint-1/3.0 - Assets/Icons/upload.svg"
              alt="upload icon"
            />
            UPLOAD
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
