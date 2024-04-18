import "./NavMenu.scss";
import close from "../../assets/images/closeSVG.svg";
import { FormEventHandler } from "react";
import SearchBox from "../SearchBox/SearchBox";

type NavMenuProps = {
  onClose: () => void;
  handleInput: FormEventHandler<HTMLInputElement>;
  searchTerm: string;
};

const NavMenu = ({ onClose, handleInput, searchTerm }: NavMenuProps) => {
  return (
    <div className="nav-menu">
      <div className="nav-menu__content">
        <img
          src={close}
          alt="Close menu"
          className="nav-menu__close"
          onClick={onClose}
        />
        <div className="nav-menu__filtering">
          <SearchBox searchTerm={searchTerm} handleInput={handleInput} />
          <div className="nav-menu__item" onClick={onClose}>
            Filter by ABV
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
