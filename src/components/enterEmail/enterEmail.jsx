import { Link } from "react-router-dom";
import "./emailForm.scss";
import { useState } from "react";
import { EmailValidation } from "../../libs/validatorSchema";
import { oliviaApi } from "../../api/baseurls";
import { Button } from "../inputs";
import { setCookie } from "../../libs/cookies";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { displayMsg } from "../../libs/reducers/messageSlice";

export const EnterEmail = ({
  userSignupDetails,
  setUserSignupDetails,
  setsteps,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = async () => {
    setIsLoading(true);

    try {
      const response = await oliviaApi.get("/signup/confirm/email", {
        headers: {
          email: values.email.toLowerCase().trim(),
        },
      });

      if (response.data.code === 200) {
        setCookie("signup-email", values.email.toLowerCase().trim());
        setUserSignupDetails({ ...userSignupDetails, email: values.email });
        setsteps(2);
        setCookie("currentStep", 2);
      }
    } catch (error) {
      console.log(error);
      dispatch(
        displayMsg({
          message: error.message,
          type: "error",
        })
      );
    }

    // setsteps(2);
    setIsLoading(false);
    values.email = "";
  };

  const { values, handleSubmit, errors, touched, handleChange } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: EmailValidation,
    onSubmit,
  });

  return (
    <div className="form_con enterEmail_section">
      <div className="header">
        <h3>Get started</h3>
        <p className="subheader">
          Enter your email in order to recieve your OTP
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="input_section">
          <div className="input_box">
            <input
              type="text"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange("email")}
            />
          </div>
          {errors && touched.email && <p className="error">{errors.email}</p>}{" "}
        </div>

        <div className="terms">
          By continuing, you agree to all <span>terms & conditions</span>.
        </div>

        <div className="btns">
          <Button text={"send OTP"} loading={isLoading} />
        </div>
      </form>

      <div className="switch">
        Already have an account? <Link to="/login">sign in</Link>
      </div>
    </div>
  );
};
