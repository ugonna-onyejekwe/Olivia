import { useState } from "react";
import { OTP_Validation } from "../../libs/validatorSchema";
import { Button, Password_input } from "../inputs";
import "./enterOTP.scss";
import { useFormik } from "formik";
import { getCookie, setCookie } from "../../libs/cookies";
import { oliviaApi } from "../../api/baseurls";
import { BeatLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import { displayMsg } from "../../libs/reducers/messageSlice";
import { TbEyeClosed } from "react-icons/tb";
import { MdOutlineRemoveRedEye } from "react-icons/md";

export const EnterOTP = ({ userSignupDetails, setsteps }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [resendingOTP, setResendingOTP] = useState(false);
  const currentUserEmail = getCookie("signup-email");
  const [showOtp, setShowOtp] = useState(false);
  const dispatch = useDispatch();

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
        values.otp = "";
      }
    } catch (error) {
      if (error?.response?.data?.error === "Wrong Otp") {
        dispatch(
          displayMsg({
            message: "Incorrect OTP",
            type: "error",
          })
        );
      } else {
        dispatch(
          displayMsg({
            message: "Unable to send OTP",
            type: "error",
          })
        );
      }
    }
    setIsLoading(false);
  };

  // initializing Formik
  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
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
              type={showOtp ? "text" : "password"}
              value={values.otp}
              onChange={handleChange("otp")}
              placeholder="Enter OTP"
            />

            <span onClick={() => setShowOtp(!showOtp)}>
              {showOtp ? <TbEyeClosed /> : <MdOutlineRemoveRedEye />}
            </span>
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
