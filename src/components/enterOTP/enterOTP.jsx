import { useState } from "react";
import { OTP_Validation } from "../../libs/validatorSchema";
import { Button } from "../inputs";
import "./enterOTP.scss";
import { useFormik } from "formik";
import { getCookie } from "../../libs/cookies";
import { oliviaApi } from "../../api/baseurls";

export const EnterOTP = ({ userSignupDetails, setsteps }) => {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    const userEmail = getCookie("signup-email");
    setIsLoading(true);

    try {
      const response = await oliviaApi.post("/signup/email/otp", {
        email: userEmail,
        otp: values.otp,
      });
      if (response.data.code === 200) {
        setsteps(3);
      }
    } catch (error) {
      console.log(error.message);
    }
    setsteps(3);
    setIsLoading(false);
  };

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: OTP_Validation,
    onSubmit,
  });

  return (
    <div className="form_con enterOtp_section">
      <div className="header">
        <h3>Verifiy your email</h3>

        <p className="subheader">
          Enter OTP code sent to <span>{userSignupDetails.email}</span>
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
          <Button text={"Verify OTP"} loading={isLoading} />
        </div>
      </form>
    </div>
  );
};
