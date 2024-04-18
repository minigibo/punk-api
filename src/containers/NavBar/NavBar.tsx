import { useState, FormEvent } from "react";
import menu from "../../assets/images/menu.png";
import NavMenu from "../../components/NavMenu/NavMenu";
import "./NavBar.scss";

type NavBarProps = {
  setIsFullWidth: (value: boolean) => void;
  handleInput: (event: FormEvent<HTMLInputElement>) => void;
  searchTerm: string;
};

const NavBar = ({ setIsFullWidth, handleInput, searchTerm }: NavBarProps) => {
  const [showNav, setShowNav] = useState(true);

  const toggleNav = () => {
    setShowNav(!showNav);
    setIsFullWidth(showNav);
  };

  const handleMenuClose = () => {
    setShowNav(false);
    setIsFullWidth(true);
  };

  return (
    <nav className="navBar">
      {showNav && (
        <NavMenu
          onClose={handleMenuClose}
          handleInput={handleInput}
          searchTerm={searchTerm}
        />
      )}
      <img
        src={menu}
        className="navBar__icon"
        alt="menu icon"
        onClick={toggleNav}
      />
      <h1 className={`navBar__title ${!showNav ? "full-width" : ""}`}>
        Beer Catalogue
      </h1>
    </nav>
  );
};

export default NavBar;
