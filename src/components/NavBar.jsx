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
      <Hamburger className="hamburger" toggled={isOpen} toggle={setOpen} />
      <div className="hamburger__button">
        <div
          className={
            isOpen
              ? "hamburger__button__container__open"
              : "hamburger__button__container__close"
          }
        >
          <Link className="hamburger__button__container__open__a" to="/">
            Accueil
          </Link>
        </div>
        <div
          className={
            isOpen
              ? "hamburger__button__container__open"
              : "hamburger__button__container__close"
          }
        >
          <Link className="hamburger__button__container__open__a" to="/Ocean">
            Océan
          </Link>
        </div>
        <div
          className={
            isOpen
              ? "hamburger__button__container__open"
              : "hamburger__button__container__close"
          }
        >
          <Link className="hamburger__button__container__open__a" to="/Forest">
            Forêt
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
