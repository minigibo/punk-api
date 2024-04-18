import "./NavMenu.scss";
import close from "../../assets/images/close.png";

type NavMenuProps = {
  onClose: () => void;
};

const NavMenu = ({ onClose }: NavMenuProps) => {
  return (
    <div className="nav-menu">
      <div className="nav-menu__content">
        <img
          src={close}
          alt="Close menu"
          className="nav-menu__close"
          onClick={onClose}
        />
        <div className="nav-menu__item" onClick={onClose}>
          Home
        </div>

        <div className="nav-menu__item" onClick={onClose}>
          Beers
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
