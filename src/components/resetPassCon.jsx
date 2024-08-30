import { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { TbEyeClosed } from "react-icons/tb";
import { Button } from "./inputs";
import { useFormik } from "formik";
import { resetPassValidationSchema } from "../libs/validatorSchema";
import { getCookie } from "../libs/cookies";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { displayMsg } from "../libs/reducers/messageSlice";
import { oliviaApi } from "../api/baseurls";

export const ResetPass_con = () => {
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const email = getCookie("resetorEmail");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await oliviaApi.put(
        "/utils/password/recovery/complete",
        {
          email: email.toLowerCase(),
          generatedtoken: values.token,
          newpassword: values.password,
        }
      );
      if (response?.data?.status === 200) {
        dispatch(
          displayMsg({
            message: "Password reset successful",
            type: "success",
          })
        );
        values.token = "";
        values.password = "";
        values.confirmPassword = "";
        navigate("/login");
      }
    } catch (error) {
      if (!error?.response) {
        dispatch(
          displayMsg({
            message: "No Server Response",
            type: "error",
          })
        );
      } else if (
        error?.response?.data?.error
          .toLowerCase()
          .includes("token does not match")
      ) {
        dispatch(
          displayMsg({
            message: "Incorrect token",
            type: "error",
          })
        );
      } else {
        dispatch(
          displayMsg({
            message: "Password recovery failed",
            type: "success",
          })
        );
      }
    }
    setIsLoading(false);
  };

  const { errors, handleChange, touched, handleSubmit, values } = useFormik({
    initialValues: {
      token: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: resetPassValidationSchema,
    onSubmit,
  });

  return (
    <>
      <div className="resetPassword_con">
        <h3>Reset your password</h3>
        <p className="sub_txt">
          Enter the required details and complete your password recovery.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="input_section email_con">
            <div className="input_box">
              <input type="text" value={email} />
            </div>
          </div>

          <div className="input_section">
            <div className="input_box">
              <input
                type="text"
                placeholder="Enter  token sent to your mail"
                value={values.token}
                onChange={handleChange("token")}
              />
            </div>
            {errors && touched.token && <p className="error">{errors.token}</p>}
          </div>

          <div className="input_section">
            <div className="input_box">
              <input
                type={showPass1 ? "text" : "password"}
                placeholder="Enter new password"
                value={values.password}
                onChange={handleChange("password")}
              />

              <span onClick={() => setShowPass1(!showPass1)}>
                {showPass1 ? <TbEyeClosed /> : <MdOutlineRemoveRedEye />}
              </span>
            </div>
            {errors && touched.password && (
              <p className="error">{errors.password}</p>
            )}{" "}
          </div>

          <div className="input_section">
            <div className="input_box">
              <input
                type={showPass2 ? "text" : "password"}
                placeholder="Confrim new password"
                value={values.confirmPassword}
                onChange={handleChange("confirmPassword")}
              />

              <span onClick={() => setShowPass2(!showPass2)}>
                {showPass2 ? <TbEyeClosed /> : <MdOutlineRemoveRedEye />}
              </span>
            </div>
            {errors && touched.confirmPassword && (
              <p className="error">{errors.confirmPassword}</p>
            )}{" "}
          </div>

          <div className="btn">
            <Button text={"reset password"} loading={isLoading} />
          </div>
        </form>
      </div>
    </>
  );
};
