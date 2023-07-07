import { Link } from "react-router-dom";
import NavMenuStyled from "./NavMenuStyled";
import { useEffect, useState } from "react";
import { Bar, XMark } from "../../assets/icons";
const NavMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <NavMenuStyled>
      <ul className={showMenu || windowWidth > 768 ? "show" : "hide"}>
        <li
          onClick={() => {
            setShowMenu(false);
          }}
        >
          <Link to={"/global"}>Global</Link>
        </li>
        <li
          onClick={() => {
            setShowMenu(false);
          }}
        >
          <Link to={"/indonesia"}>Indonesia</Link>
        </li>
        <li
          onClick={() => {
            setShowMenu(false);
          }}
        >
          <Link to={"/provinsi"}>Provinsi</Link>
        </li>
        <li
          onClick={() => {
            setShowMenu(false);
          }}
        >
          <Link to={"/about"}>About</Link>
        </li>
        <button
          onClick={() => {
            setShowMenu(false);
          }}
        >
          <XMark />
        </button>
      </ul>
      <button
        onClick={() => {
          setShowMenu(true);
        }}
      >
        <Bar />
      </button>
    </NavMenuStyled>
  );
};

export default NavMenu;
