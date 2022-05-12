import "../App.scss";
import { useState } from "react";
import Hamburger from "hamburger-react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  // state
  const [isOpen, setOpen] = useState(false);
  // function

  // debug

  return (
    <div className="hamburger">
      <Hamburger toggled={isOpen} toggle={setOpen} />
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/Ocean">Océan</NavLink>
      <NavLink to="/Forest">Forêt</NavLink>
    </div>
  );
};

export default NavBar;
