import React from "react";
import "./login.scss";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { MdOutlineRemoveRedEye } from "react-icons/md";

export const Login = () => {
  return (
    <div className="login_page">
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
            <div className="header">
              <h3>Welcome back!</h3>

              <p className="subheading">Login to your account to continue</p>
            </div>

            <form action="#">
              <div className="input_section">
                <div className="input_box">
                  <input type="email" placeholder="Your email" />
                </div>
                {false && <p className="error">Email has been used</p>}{" "}
              </div>

              <div className="input_section">
                <div className="input_box">
                  <input type="password" placeholder="Password" />

                  <span>
                    <MdOutlineRemoveRedEye />
                  </span>
                </div>
                {false && <p className="error">Email has been used</p>}{" "}
              </div>

              <div className="btn">
                <button>sign in</button>
              </div>

              <div className="switch">
                Don't have an account? <Link to="/signup">Create one</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
