import "../App.scss";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  // state
  const [isOpen, setOpen] = useState(false);
  // function

  // debug

  return (
    <div className="burger">
      <Hamburger toggled={isOpen} toggle={setOpen} />
      <Link to="/">Accueil</Link>
      <Link to="/Ocean">Océan</Link>
      <Link to="/Forest">Forêt</Link>
    </div>
  );
};

export default NavBar;
