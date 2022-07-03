import "./style.scss";
import { useState } from "react";
import NavBar from "../NavBar/";
import hamburger from "./hamburger.png";
import facebook from "./facebook.png";
import instagram from "./instagram.png";
import logo from "./logo.png";
import close from "./close.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuOpen() {
    setMenuOpen(!menuOpen);
    console.log("hamburger");
  }

  return (
    <header>
      <div className="header gutters">
        <div className="logo">
          <h1>Takeawei</h1>
          <img src={logo} alt="logo" />
        </div>
        <div className="socials">
          <a href="https://www.facebook.com/hellotakeawei">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="https://www.instagram.com/takeawei/?hl=en">
            <img src={instagram} alt="insta" />
          </a>
        </div>
      </div>

      <NavBar menuOpen={menuOpen} />

      {menuOpen ? (
        <img
          onClick={handleMenuOpen}
          className="menubar"
          src={close}
          style={{ height: "20px", padding: "5px" }}
          alt="back"
        />
      ) : (
        <img
          onClick={handleMenuOpen}
          className="menubar"
          src={hamburger}
          alt="menu"
        />
      )}
    </header>
  );
}
export default Header;
