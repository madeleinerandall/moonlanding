import "./style.scss";
import { Link } from "react-router-dom";
import facebook from "./facebook.png";
import insta from "./instagram.png";

function NavBar({ menuOpen }) {
  return (
    <aside className={menuOpen ? "active" : ""}>
      <div>
        <Link to="/">Home</Link>
        <Link to="/">Product</Link>
        <Link to="contact">Contact</Link>
        <div className="socials">
          <a href="https://www.facebook.com/hellotakeawei">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="https://www.instagram.com/takeawei/?hl=en">
            <img src={insta} alt="instagram" />
          </a>
        </div>
      </div>
    </aside>
  );
}

export default NavBar;
