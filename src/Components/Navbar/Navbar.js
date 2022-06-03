import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Styles from "./Navbar.module.css";
import icon from "./Hamberger.png";
import SearchBar from "../SearchBar/SearchBar";
export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav className={Styles.nav}>
      <h1 className={Styles.title}>Anarchist Etsy</h1>
      {(toggleMenu || screenWidth > 1060) && (
        <>
          <div className={Styles.backdrop} onClick={toggleNav}></div>
          <ul className={Styles.list}>
            <li className={Styles.items}>
              <SearchBar />
            </li>
            <ul className={Styles.iconList}>
              <li className={Styles.items}>
                <Link to="/">
                  <img src=".\icons\Likes.svg" />
                </Link>
              </li>
              <li className={Styles.items}>
                <Link to="/contact">
                  <img src=".\icons\Profile.svg" />
                </Link>
              </li>
              <li className={Styles.items}>
                <Link to="/cart">
                  <img src=".\icons\Cart.svg" />
                </Link>
              </li>
            </ul>
          </ul>
        </>
      )}
      <button onClick={toggleNav} className={Styles.hambergerBtn}>
        <img className={Styles.img} src={icon} alt="Menu" />
      </button>
    </nav>
  );
}
