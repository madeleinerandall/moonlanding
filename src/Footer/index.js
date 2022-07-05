import "./style.scss";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import facebook from "./facebook.png";
import instagram from "./instagram.png";
import linkedin from "./linkedin.png";
import git from "./octocat.png";
import profile from "./MADDIE.png";
import { useState } from "react";

function Footer() {
  const [profileClick, setProfileClick] = useState(false);

  function handleProfileClick() {
    setProfileClick(true);
    console.log("true!");
  }

  return (
    <footer>
      <div className="footer gutters">
        <div className="socials">
          <div className="socials-text">
            <h1>Takeawei</h1>
            <img src={logo} alt="logo" />
          </div>
          <div className="socials-images">
            <a href="https://www.facebook.com/hellotakeawei">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="https://www.instagram.com/takeawei/?hl=en">
              <img src={instagram} alt="insta" />
            </a>
          </div>
        </div>
        <div className="takeawei">
          <p>
            All photographs belong to Takeawei © and are used in this site for
            educational purposes not for profit.
          </p>
          <p>
            About the wonderful business: Designer Chela Edmunds launched
            Takeawei in 2013. She works with a small team at her studio on the
            Surf Coast, Australia to create fun, functional ceramics for your
            home and commercial projects. From mugs to lighting, each piece is
            handmade to enjoy everyday with a focus on design, craftsmanship and
            functionality.
          </p>
        </div>
        <div className="developer-info">
          <div>
            <p>
              This website has been created using HTML, SCSS and JavaScript
              languages in React. All code is available in GitHub, which was
              updated and managed using a UNIX terminal. The app is desktop,
              tablet and mobile responsive. I have designed and built this app
              myself reflecting on the style choices from the original Takeawei
              © website. I have completely styled all pages, including buttons
              and forms myself - the only library used is the carousel. All
              buttons are functional UI's, so please test them out!
            </p>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/madeleine-randall-0282b7230/">
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="https://github.com/madeleinerandall">
              <img src={git} alt="octocat" />
            </a>
          </div>
        </div>
      </div>
      <section className="copyright gutters">
        <nav>
          <Link to="/">Home</Link>
          <Link to="products">Products</Link>
          <Link to="contact">Contact</Link>
        </nav>
        <p>© 2022 Madeleine Randall</p>
      </section>
    </footer>
  );
}

export default Footer;
