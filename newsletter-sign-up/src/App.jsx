import React from "react";
import Input from "./Form/Input";
import useForm from "./Hooks/useForm";
import "./App.css";
import bgDesktop from "./images/illustration-sign-up-desktop.svg";
import bgMobile from "./images/illustration-sign-up-mobile.svg";
import iconSuccess from "./images/icon-success.svg";

const App = () => {
  const email = useForm("email");
  const [showConfirmeMsg, setShowConfirmMsg] = React.useState(false);
  const classContainer = `container ${showConfirmeMsg && "hidden"}`;

  function handleSubmit(event) {
    event.preventDefault();
    if (email.validate()) {
      console.log("Enviou");
      setShowConfirmMsg(true);
    } else {
      console.log("Não enviar | Mostra erro");
    }
  }

  function dismissMessage(event) {
    event.preventDefault();
    setShowConfirmMsg(false);
  }

  return (
    <>
      <section className={classContainer}>
        <img className="mobile-image" src={bgMobile} alt="" />
        <div className="content">
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            <li>
              <p>Product discovery and building what matters</p>
            </li>
            <li>
              <p>Measuring to ensure updates are a success</p>
            </li>
            <li>
              <p>And much more!</p>
            </li>
          </ul>
          <form onSubmit={handleSubmit}>
            <Input
              label="Email address"
              id="email"
              type="email"
              placeholder="email@company.com"
              {...email}
            />
            <button className="button">Subscribe to monthly newsletter</button>
          </form>
        </div>
        <img className="desktop-image" src={bgDesktop} alt="" />
      </section>
      {showConfirmeMsg && (
        <section className="thanks">
          <img src={iconSuccess} alt="" />
          <h1>Thanks for subscribing!</h1>
          <p>
            A confirmation email has been sent to{" "}
            <span>ash@loremcompany.com</span>. Please open it and click the
            button inside to confirm your subscription.
          </p>
          <button onClick={dismissMessage} className="button">
            Dismiss message
          </button>
        </section>
      )}
    </>
  );
};
export default App;
