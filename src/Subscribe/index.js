import "./style.scss";
import toast from "react-hot-toast";

function Subscribe() {
  function handleSubmit(e) {
    e.preventDefault();
    const emailEl = document.getElementById("email");
    fetch("https://httpbin.org/post", {
      method: "POST",
      body: JSON.stringify({ email: emailEl.value }),
    }).then((data) => {
      toast.success(
        "Thank you for subscribing! Email address has been sent to https://httpbin.org/post as a demonstration of POSTing data to an API."
      );
      emailEl.value = "";
    });
  }

  return (
    <section>
      <div className="subscribe gutters">
        <h1>Stay in touch</h1>
        <p>
          Subscribe to test this functionality. Data will be POSTed to
          https://httpbin.org/post.{" "}
        </p>
        <form onSubmit={handleSubmit}>
          <input id="email" placeholder="Email" type="email" required />
          <input type="submit" value="" />
        </form>
      </div>
    </section>
  );
}

export default Subscribe;
