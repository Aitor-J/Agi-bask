import "../App.scss";
import { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  // state
  const [isOpen, setOpen] = useState(false);

  // function

  // debug

  return (
    <div className="hamburger">
      <Hamburger toggled={isOpen} toggle={setOpen} />
      <div className="hambuger__container">
        <div
          className={
            isOpen
              ? "hamburger__container__open"
              : "hamburger__container__close"
          }
        >
          <Link className="hamburger__container__open__a" to="/">
            Accueil
          </Link>
        </div>
        <div
          className={
            isOpen
              ? "hamburger__container__open"
              : "hamburger__container__close"
          }
        >
          <Link className="hamburger__container__open__a" to="/Ocean">
            Océan
          </Link>
        </div>
        <div
          className={
            isOpen
              ? "hamburger__container__open"
              : "hamburger__container__close"
          }
        >
          <Link className="hamburger__container__open__a" to="/Forest">
            Forêt
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
