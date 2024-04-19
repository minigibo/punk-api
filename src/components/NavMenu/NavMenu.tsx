import "./NavMenu.scss";
import close from "../../assets/images/closeSVG.svg";
import { FormEventHandler } from "react";
import SearchBox from "../SearchBox/SearchBox";
import Filters from "../Filter/Filter";
import { Link } from "react-router-dom";

type NavMenuProps = {
  onClose: () => void;
  handleInput: FormEventHandler<HTMLInputElement>;
  searchTerm: string;
  handleFiltersChange: (filters: string[]) => void;
  activeFilters: string[];
};

const NavMenu = ({
  onClose,
  handleInput,
  searchTerm,
  handleFiltersChange,
  activeFilters,
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
          <div className="nav-menu__filtering-div">
            <Link to="/" className="nav-menu__filtering-link">
              Home
            </Link>
            <SearchBox searchTerm={searchTerm} handleInput={handleInput} />
          </div>
          <Filters
            handleFiltersChange={handleFiltersChange}
            activeFilters={activeFilters}
          />
        </div>
        <div className="nav-menu__driving">Driving Calculator</div>
      </div>
    </div>
  );
};

export default NavMenu;
