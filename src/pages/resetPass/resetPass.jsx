import "./resetPass.scss";
import logo from "../../assets/logo.png";

import { ResetPasswordEmail_con } from "../../components/resetPasswordEmailCon";
import { useState } from "react";
import { ResetPass_con } from "../../components/resetPassCon";

export const ResetPass = () => {
  const [steps, setSteps] = useState(1);
  return (
    <div className="reset_password_page">
      <div className="container">
        <div className="nav">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <div className="steps">
            <p>
              Step <span>{steps}</span> out of 2
            </p>
          </div>
        </div>

        <div className="wrapper">
          {/* Enter email */}
          {steps === 1 && <ResetPasswordEmail_con setSteps={setSteps} />}
          {/* Reset password */}
          {steps === 2 && <ResetPass_con />}
        </div>
      </div>
    </div>
  );
};
