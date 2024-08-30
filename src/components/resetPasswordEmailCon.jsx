import { useFormik } from "formik";
import { EmailValidation } from "../libs/validatorSchema";
import { Link } from "react-router-dom";
import { Button } from "./inputs";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { displayMsg } from "../libs/reducers/messageSlice";
import { oliviaApi } from "../api/baseurls";
import { setCookie } from "../libs/cookies";

export const ResetPasswordEmail_con = ({ setSteps }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await oliviaApi.put("/utils/password/recovery", {
        email: values.email.toLowerCase(),
      });

      if (response?.data?.status === 200) {
        setCookie("resetorEmail", values.email);

        dispatch(
          displayMsg({
            message: `Reset password token sent to ${values.email}`,
            type: "success",
          })
        );
        setSteps(2);
        values.email = "";
      }
    } catch (error) {
      if (!error?.response) {
        console.log(error, error.response);
        dispatch(
          displayMsg({
            message: `No Server Response`,
            type: "error",
          })
        );
      } else if (error.response?.status === 404) {
        dispatch(
          displayMsg({
            message: `User not Found`,
            type: "error",
          })
        );
      } else if (error.response?.data?.error === "User Does Not Exist") {
        dispatch(
          displayMsg({
            message: "User does not exist",
            type: "error",
          })
        );
      } else {
        dispatch(
          displayMsg({
            message: "Unable to send mail",
            type: "error",
          })
        );
      }
    }
    setIsLoading(false);
  };

  const { errors, handleChange, touched, handleSubmit, values } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: EmailValidation,
    onSubmit,
  });
  return (
    <>
      <div className="password_reset_email_con">
        <h3>forgotten Password?</h3>

        <p className="sub_txt">
          Enter your email to get details to reset password
        </p>

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

          <div className="btns">
            <Link to="/login">Back to login</Link>
            <Button text={"continue"} loading={isLoading} />
          </div>
        </form>
      </div>
    </>
  );
};
