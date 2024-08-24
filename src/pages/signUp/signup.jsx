import React, { useState } from "react";
import "./signup.scss";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { EnterOTP } from "../../components/enterOTP/enterOTP";
import { EnterDetails } from "../../components/enterDetails/enterDetails";
import signup_image from "../../assets/signup.png";
import { userdetails } from "../../components/data";
import { EnterEmail } from "../../components/emailForm/emailform";

export const Signup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userSignupDetails, setUserSignupDetails] = useState({
    ...userdetails,
  });

  return (
    <div className="Sign_up_page">
      <div className="main">
        <div
          className={
            currentStep === 3 ? "form_wrapper active " : "form_wrapper"
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
            <div className="steps">
              <p>
                Step <span>{currentStep}</span>
                of 3
              </p>
            </div>
          </div>

          {/* From section */}

          {/* Enter email section */}
          <div className={"form_container"}>
            {currentStep === 1 && (
              <EnterEmail
                userSignupDetails={userSignupDetails}
                setUserSignupDetails={setUserSignupDetails}
                setsteps={setCurrentStep}
              />
            )}

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
              />
            )}
          </div>
        </div>

        {/* img_wrapper */}
        <div
          className={currentStep === 3 ? "img_wrapper remove" : "img_wrapper"}
        >
          <div className="img">
            <img src={signup_image} alt="sign up image" />
          </div>
        </div>
      </div>
    </div>
  );
};
