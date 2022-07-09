import "./style.scss";
import ScrollToTop from "../ScrollToTop";
import toast from "react-hot-toast";

function Contact() {
  function handleSubmit(e) {
    const nameEl = document.getElementById("name");
    const emailEl = document.getElementById("email");
    const messageEl = document.getElementById("message");
    e.preventDefault();

    toast.success("Form data submitted!");
    nameEl.value = "";
    emailEl.value = "";
    messageEl.value = "";
  }
  return (
    <>
      <ScrollToTop />
      <div className="header-section" />
      <section id="contact-page">
        <div className="contact-form gutters">
          <div className="contact">
            <div className="title">
              <h1>Contact</h1>
            </div>
            <div className="contact-text">
              <h3>Takeawei Corner Store</h3>
              <p>120 Gertrude St Fitzroy, Melbourne 3065</p>
              <h3>Got questions?</h3>
              <p>
                Email us at shoptakeawei@gmail.com or send us a message via
                contact form below.
              </p>
            </div>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <input id="name" placeholder="Name" type="text" class="required" />
            <input
              id="email"
              placeholder="Email"
              type="email"
              class="required"
            />
            <textarea
              id="message"
              placeholder="Messsage"
              type="text"
              class="required"
              rows="3"
              maxLength="300"
            />
            <input type="submit" value="SEND" />
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
