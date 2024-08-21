import React from "react";
import "./signup.scss";
import Logo from "../../assets/logo.png";
import { EnterEmail } from "../../components/emailForm/emailform";
import { Link } from "react-router-dom";
import { EnterOTP } from "../../components/enterOTP/enterOTP";
import { EnterDetails } from "../../components/enterDetails/enterDetails";

export const Signup = () => {
  return (
    <div className="Sign_up_page">
      <div className="container">
        <div className="nav">
          <div className="logo">
            <Link to={"/"}>
              <img src={Logo} alt="logo" />
            </Link>
          </div>
        </div>

        <div className="main">
          <div className="wrapper">
            {/* <EnterEmail /> */}
            {/* <EnterOTP /> */}
            <EnterDetails />
          </div>
        </div>
      </div>
    </div>
  );
};
