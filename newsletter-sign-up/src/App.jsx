import React from "react";
import Input from "./Form/Input";
import useForm from "./Hooks/useForm";
import "./App.css";
import bgDesktop from "./images/illustration-sign-up-desktop.svg";

const App = () => {
  const email = useForm("email");

  function handleSubmit(event) {
    event.preventDefault();
    if (email.validate()) {
      console.log("Enviou");
    } else {
      console.log("Não enviar | Mostra erro");
    }
  }

  return (
    <>
      <section className="container">
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
            <button>Subscribe to monthly newsletter</button>
          </form>
        </div>
        {/* <BgDesktop /> */}
        <img src={bgDesktop} alt="imagem fundo" />
      </section>

      {/* Thanks for subscribing!

A confirmation email has been sent to ash@loremcompany.com. 
Please open it and click the button inside to confirm your subscription.

Dismiss message */}
    </>
  );
};
export default App;
