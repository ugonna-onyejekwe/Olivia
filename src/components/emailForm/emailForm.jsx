import { Link } from "react-router-dom";
import "./emailForm.scss";
import { useState } from "react";

export const EnterEmail = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="form_con enterEmail_section">
      <div className="header">
        <h3>Get started</h3>
        <p className="steps">
          Step <span>1</span> of 3
        </p>
        <p className="subheader">
          Enter your email in order to recieve your OTP
        </p>
      </div>

      <form action="#">
        <div className="input_section">
          <div className="input_box">
            <input type="email" placeholder="Enter your email" />
          </div>
          {false && <p className="error">Email has been used</p>}{" "}
        </div>

        <div className="terms">
          By continuing, you agree to all <span>terms & conditions</span>.
        </div>

        <div className="btns">
          <button>send OTP</button>
        </div>
      </form>

      <div className="switch">
        Already have an account? <Link to="/login">sign in</Link>
      </div>
    </div>
  );
};
