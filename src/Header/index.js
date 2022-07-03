import "./style.scss";
import hamburger from "./hamburger.png";
import facebook from "./facebook.png";
import instagram from "./instagram.png";
import logo from "./logo.png";

function Header() {
  return (
    <header>
      <div className="header gutters">
        <img id="menu" src={hamburger} alt="hamburger" />
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
      <div>
        <div className="box">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
export default Header;
