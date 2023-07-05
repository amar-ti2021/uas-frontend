import { Link } from "react-router-dom";
import StyledNavbar from "./StyledNavbar";

const Navbar = () => {
  return (
    <StyledNavbar>
      <div>
        <h4>COVID ID</h4>
      </div>
      <ul>
        <li>
          <Link to={"/global"}>Global</Link>
        </li>
        <li>
          <Link to={"/indonesia"}>Indonesia</Link>
        </li>
        <li>
          <Link to={"/provinsi"}>Provinsi</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;
