import "./NavMenu.scss";
import close from "../../assets/images/closeSVG.svg";
import { FormEventHandler } from "react";
import SearchBox from "../SearchBox/SearchBox";
import Filters from "../Filter/Filter";

type NavMenuProps = {
  onClose: () => void;
  handleInput: FormEventHandler<HTMLInputElement>;
  searchTerm: string;
  handleFiltersChange: (filters: string[]) => void;
};

const NavMenu = ({
  onClose,
  handleInput,
  searchTerm,
  handleFiltersChange,
}: NavMenuProps) => {
  return (
    <div className="nav-menu" onClick={(e) => e.stopPropagation()}>
      <div className="nav-menu__content">
        <img
          src={close}
          alt="Close menu"
          className="nav-menu__close"
          onClick={onClose}
        />
        <div className="nav-menu__filtering">
          <SearchBox searchTerm={searchTerm} handleInput={handleInput} />
          <Filters handleFiltersChange={handleFiltersChange} />
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
