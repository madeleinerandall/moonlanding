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
        <div>
          <input placeholder="Email" type="text" />
          <img onClick={alert} src={arrow} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
