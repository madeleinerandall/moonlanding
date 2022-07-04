import "./style.scss";
import arrow from "./arrow.png";
import toast from "react-hot-toast";

function Subscribe() {
  function alert() {
    toast.error("This is a fake button. Thank you for wanting to subscribe!!");
  }

  return (
    <section>
      <div className="subscribe gutters">
        <h1>Stay in touch</h1>
        <p>Subscribe to keep up to date with the latest news.</p>
        <form>
          <input placeholder="Email" type="email" />
          <img onClick={alert} type="submit" src={arrow} alt="arrow" />
        </form>
      </div>
    </section>
  );
}

export default Subscribe;
