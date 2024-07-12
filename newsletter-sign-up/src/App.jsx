import React from "react";
import Input from "./Form/Input";
import useForm from "./Hooks/useForm";
import "./App.css";
import bgDesktop from "./images/illustration-sign-up-desktop.svg";
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
        <div className="content">
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
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
        <img src={bgDesktop} alt="" />
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
