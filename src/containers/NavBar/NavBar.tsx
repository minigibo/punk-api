import { useState } from "react";
import menu from "../../assets/images/menu.png";
import NavMenu from "../../components/NavMenu/NavMenu";
import "./NavBar.scss";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="navBar">
      {showNav && <NavMenu onClose={toggleNav} />}
      <img
        src={menu}
        className="navBar__icon"
        alt="menu icon"
        onClick={toggleNav}
      />
      <h1 className="navBar__title">Beer Catalogue</h1>
      {showNav && <NavMenu onClose={toggleNav} />}
    </nav>
  );
};

export default NavBar;
