import { useState } from "react";
import { OTP_Validation } from "../../libs/validatorSchema";
import { Button } from "../inputs";
import "./enterOTP.scss";
import { useFormik } from "formik";
import { getCookie, setCookie } from "../../libs/cookies";
import { oliviaApi } from "../../api/baseurls";
import { BeatLoader } from "react-spinners";

export const EnterOTP = ({ userSignupDetails, setsteps }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [resendingOTP, setResendingOTP] = useState(false);
  const currentUserEmail = getCookie("signup-email");

  // HAndle submit function
  const onSubmit = async () => {
    setIsLoading(true);

    try {
      const response = await oliviaApi.post("/signup/email/otp", {
        email: currentUserEmail,
        otp: values.otp,
      });
      if (response.data.code === 200) {
        setsteps(3);
        setCookie("currentStep", 3);
      }
    } catch (error) {
      console.log(error.message, "error");
    }
    setIsLoading(false);
    setCookie("currentStep", 3);
    setsteps(3);
  };

  // initializing Formik
  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: OTP_Validation,
    onSubmit,
  });

  // Resend OTP function
  const resendOTP = async () => {
    try {
      const response = await oliviaApi.get("/signup/confirm/email", {
        headers: {
          email: currentUserEmail,
        },
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }

    setResendingOTP(false);
  };

  return (
    <div className="form_con enterOtp_section">
      <div className="header">
        <h3>Verifiy your email</h3>

        <p className="subheader">
          Enter OTP code sent to <span>{currentUserEmail}</span>
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="input_section">
          <div className="input_box">
            <input
              type="text"
              value={values.otp}
              onChange={handleChange("otp")}
              placeholder="Enter OTP"
            />
          </div>
          {errors && <p className="error"> {errors.otp}</p>}{" "}
        </div>

        <div className="btns">
          <span
            className="previous_btn"
            onClick={() => {
              setsteps(1);
              setCookie("currentStep", 1);
            }}
          >
            back
          </span>
          <Button text={"Verify OTP"} loading={isLoading} />
        </div>

        <div className="refetch_otp">
          Didn't get OTP? <span onClick={resendOTP}>resend OTP</span>
        </div>

        {resendingOTP && (
          <div className="sending_OTP_wrapper">
            <div className="txt">
              <p>
                Sending OTP to <span>{userSignupDetails.email}</span>
              </p>
              <p className="loader">
                <BeatLoader color="#2b1864" size={7} speedMultiplier={1} />
              </p>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};
