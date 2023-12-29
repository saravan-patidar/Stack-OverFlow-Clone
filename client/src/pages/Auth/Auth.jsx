import React, { useState } from "react";

import "./Auth.css";
import logo from "../../assets/Logo.png";

const Auth = () => {
  const [isSignup, setSignup] = useState(false);

  const handleSwitch = () => {
    setSignup(!isSignup);
  };
  return (
    <section className="auth-section">
      <div className="about-content">
        <h2>Join the Stack overflow community</h2>
        <p></p>
      </div>

      <div className="container">
        {!isSignup && (
          <img src={logo} alt="stack overflow" style={{ width: "100px" }} />
        )}
        <form>
          {isSignup ? (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input type="text" name="name" id="name" />
            </label>
          ) : null}
          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name="email" id="email" />
          </label>
          <label htmlFor="password">
            <div className="pass">
              <h4>Password</h4>
              {!isSignup ? <h4>forget password</h4> : null}
            </div>
            <input type="text" id="password" name="password " />
            {isSignup ? (
              <p>
                Passwords must contain at least eight characters, including at
                least 1 letter and 1 number.
              </p>
            ) : null}
          </label>
          {isSignup && (
            <label htmlFor="check">
              <input type="checkbox" id="check" name="check" />
              <p>
                Opt-in to receive occasional product updates, user research
                invitations, company announcements, and digests.
              </p>
            </label>
          )}
          <button type="submit">{isSignup ? "Sign up" : "Login"}</button>
          {isSignup && (
            <p>
              By clicking “Sign up”, you agree to our
              <span style={{ color: "#007ac6" }}>terms of service</span> and
              acknowledge that you have read and understand our
              <span style={{ color: "#007ac6" }}> privacy policy</span> and{" "}
              <span style={{ color: "#007ac6" }}>code of conduct.</span>
            </p>
          )}
        </form>
        <p>
          {isSignup ? "already have an account " : "Don't have an account"}
          <button
            type="button"
            className="handleSwitch_btn"
            onClick={handleSwitch}
          >
            {!isSignup ? " Sign up" : " Login"}
          </button>
        </p>
      </div>
    </section>
  );
};
export default Auth;
