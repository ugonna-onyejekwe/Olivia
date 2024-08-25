import React, { useState } from "react";
import "./signup.scss";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { EnterOTP } from "../../components/enterOTP/enterOTP";
import { EnterDetails } from "../../components/enterDetails/enterDetails";
import signup_image from "../../assets/signup.png";
import { userdetails } from "../../components/data";
// import { EnterEmail } from "../../components/emailForm/emailform";
import success_img from "../../assets/success.png";
import { getCookie } from "../../libs/cookies";

export const Signup = () => {
  const step = getCookie("currentStep");
  const [currentStep, setCurrentStep] = useState(Number(step) || 1);
  const [userSignupDetails, setUserSignupDetails] = useState({
    ...userdetails,
  });

  return (
    <div className="Sign_up_page">
      <div className="main">
        <div
          className={
            currentStep === 3 || currentStep === 0
              ? "form_wrapper active "
              : "form_wrapper"
          }
        >
          {/* logo section */}
          <div className="nav">
            {/* logo */}
            <div className="logo">
              <Link to={"/"}>
                <img src={Logo} alt="logo" />
              </Link>
            </div>

            {/* step count */}
            {currentStep === 0 || (
              <div className="steps">
                <p>
                  Step <span>{currentStep}</span>
                  of 3
                </p>
              </div>
            )}
          </div>

          {/* From section */}

          {/* Enter email section */}
          <div className={"form_container"}>
            {/* {currentStep === 1 && (
              <EnterEmail
                userSignupDetails={userSignupDetails}
                setUserSignupDetails={setUserSignupDetails}
                setsteps={setCurrentStep}
              />
            )} */}

            {/* Enter OTP section */}
            {currentStep === 2 && (
              <EnterOTP
                userSignupDetails={userSignupDetails}
                setsteps={setCurrentStep}
              />
            )}

            {/* Enter detials section */}
            {currentStep === 3 && (
              <EnterDetails
                userSignupDetails={userSignupDetails}
                setUserSignupDetails={setUserSignupDetails}
                setsteps={setCurrentStep}
              />
            )}

            {/* sucess message */}
            {currentStep === 0 && (
              <div className="success_message">
                <h3>congratulations!</h3>

                <div className="img">
                  <img src={success_img} alt="success image" />
                </div>

                <p>
                  Hello <b>{userSignupDetails.firstName}</b>, your account has
                  been successfully created, it might take some minutes for our
                  team to get your account ready.{" "}
                </p>

                <Link to="/login">
                  <button>Countinue to login</button>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* img_wrapper */}
        <div
          className={
            currentStep === 3 || currentStep === 0
              ? "img_wrapper remove"
              : "img_wrapper"
          }
        >
          <div className="img">
            <img src={signup_image} alt="sign up image" />
          </div>
        </div>
      </div>
    </div>
  );
};
