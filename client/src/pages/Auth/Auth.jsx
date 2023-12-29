import React, { useState } from "react";

import "./Auth.css";
import logo from "../../assets/Logo.png";
import AboutAuth from '../Auth/AboutAuth'

const Auth = () => {
  const [isSignup, setSignup] = useState(false);

  const handleSwitch = () => {
    setSignup(!isSignup);
  };
  return (
    <section className="auth-section">
      {isSignup && <AboutAuth />}
      <div className="container">
        {!isSignup && (
          <img
            src={logo}
            className="auth-logo"
            alt="stack overflow"
            style={{ width: "60px" }}
          />
        )}
        <form className="auth_form">
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
              {!isSignup ? <p className="f-pass">forget password?</p> : null}
            </div>
            <input type="text" id="password" name="password " />
            {isSignup ? (
              <p className="pass_des">
                Passwords must contain at least eight characters, including at
                least 1 letter and 1 number.
              </p>
            ) : null}
          </label>
          {isSignup && (
            <label className='notify' htmlFor="check">
              <input type="checkbox" id="check" name="check" />
              <p>
                Opt-in to receive occasional product updates, user research
                invitations, company announcements, and digests.
              </p>
            </label>
          )}
          <button type="submit" className="form_btn">
            {isSignup ? "Sign up" : "Login"}
          </button>
          {isSignup && (
            <p className="toc">
              By clicking “Sign up”, you agree to our
              <span style={{ color: "#007ac6" }}>terms of service</span> and
              acknowledge that you have read and understand our
              <span style={{ color: "#007ac6" }}> privacy policy</span> and{" "}
              <span style={{ color: "#007ac6" }}>code of conduct.</span>
            </p>
          )}
        </form>
        <p className="account-text">
          {isSignup ? "Already have an account " : "Don't have an account?"}
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
