import React, { useState } from "react";
import "./login.scss";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import signin_image from "../../assets/signup.png";
import { Button } from "../../components/inputs";
import { useFormik } from "formik";
import { TbEyeClosed } from "react-icons/tb";
import { LoginValidation } from "../../libs/validatorSchema";
import { oliviaApi } from "../../api/baseurls";
import { removeCookie, setCookie } from "../../libs/cookies";
import { useDispatch } from "react-redux";
import { displayMsg } from "../../libs/reducers/messageSlice";
import { loginErrors } from "../../components/loginErrors";

export const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const dispatch = useDispatch();

  // Handle submit function
  const onSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await oliviaApi.post("/signin/web", {
        password: values.password.trim(),
        username: values.email.trim().toLowerCase(),
      });

      const {
        userCategory,
        systemid,
        token,
        isAgent,
        setup,
        isVerified,
        curSymbol,
        curAbbre,
        logourl,
        staticaccountname,
        staticaccountbank,
        staticaccountnumber,
      } = response?.data;

      removeCookie("signup-email");

      if (
        userCategory === "OLIVIA_USER" ||
        userCategory === "OLIVIA_SUB_USER"
      ) {
        setCookie("token", token);
        setCookie("systemid", systemid);
        setCookie("user", userCategory);
        setCookie("isAgent", isAgent);
        // dispatch(setBusinessUrl(response.data.url));
        setCookie("url", response.data.url);
        setCookie("business-email", values.email);
        setCookie("setup", setup);
        setCookie("logourl", logourl);
        setCookie("isVerified", isVerified);
        setCookie("curSymbol", curSymbol);
        setCookie("curAbbre", curAbbre);
        setCookie("accountName", staticaccountname);
        setCookie("accountBank", staticaccountbank);
        setCookie("accountNumber", staticaccountnumber);
        localStorage.setItem("setup", JSON.stringify(setup));

        // Display login message
        dispatch(
          displayMsg({
            message: "Login successful",
            type: "success",
          })
        );
      } else {
        // Display error message
        dispatch(
          displayMsg({
            message: "you are not an authorized user",
            type: "error",
          })
        );
      }

      values.email = "";
      values.password = "";
    } catch (error) {
      const errorMsg = loginErrors(error);

      dispatch(
        displayMsg({
          message: errorMsg,
          type:
            errorMsg ===
            "Your signup is currently being reviewed. Please try again later."
              ? "pending"
              : "error",
        })
      );
    }

    setIsLoading(false);
  };

  // initailizing formik
  const { values, touched, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginValidation,
    onSubmit,
  });

  return (
    <div className="login_page">
      <div className="txt_wrapper">
        <div className="nav">
          <div className="logo">
            <Link to={"/"}>
              <img src={Logo} alt="logo" />
            </Link>
          </div>
        </div>

        <div className="main">
          <h3>Welcome back!</h3>

          <p className="subheading">Login to your account to continue</p>

          <form onSubmit={handleSubmit}>
            <div className="input_section">
              <div className="input_box">
                <input
                  type="text"
                  placeholder="Your email"
                  value={values.email}
                  onChange={handleChange("email")}
                />
              </div>
              {errors && touched.email && (
                <p className="error">{errors.email}</p>
              )}{" "}
            </div>

            <div className="input_section">
              <div className="input_box">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange("password")}
                />

                <span onClick={() => setShowPass(!showPass)}>
                  {showPass ? <TbEyeClosed /> : <MdOutlineRemoveRedEye />}
                </span>
              </div>
              {errors && touched.password && (
                <p className="error">{errors.password}</p>
              )}{" "}
            </div>

            <p className="forgetten_pass">
              Forgotten password? <Link to="/password-reset">reset it </Link>
            </p>

            <div className="btn">
              <Button text={"sign in"} loading={isLoading} />
            </div>

            <div className="switch">
              Don't have an account? <Link to="/signup">Create one</Link>
            </div>
          </form>
        </div>
      </div>

      <div className="img_wrapper">
        <div className="img">
          <img src={signin_image} alt="" />
        </div>
      </div>
    </div>
  );
};
