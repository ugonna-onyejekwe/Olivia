import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import "./contact.scss";
import { CiMail } from "react-icons/ci";
import { GiRotaryPhone } from "react-icons/gi";
import { TermsConditions } from "../terms-conditions/terms-conditions";
import { Value } from "sass";
import { ContactFormValidation } from "../../libs/validatorSchema";
import { useFormik } from "formik";
import { Button } from "../inputs";
import { useDispatch } from "react-redux";
import { displayMsg } from "../../libs/reducers/messageSlice";
import { oliviaApi } from "../../api/baseurls";

export const Contact = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await oliviaApi.post("/contact/create", {
        email: values.email,
        name: values.name,
        phoneNumber: values.phoneNumber,
        message: values.message,
      });

      console.log(response.data);
      values.email = "";
      values.phoneNumber = "";
      values.name = "";
      values.message = "";

      dispatch(
        displayMsg({
          message: "Message sent successfully",
          type: "success",
        })
      );
    } catch (error) {
      if (!error?.response) {
        dispatch(
          displayMsg({
            message: "Server not responding. Check internet",
            type: "error",
          })
        );
      } else {
        console.log(error);
      }
    }
    setIsLoading(false);
  };

  const { errors, handleChange, touched, handleSubmit, values } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    validationSchema: ContactFormValidation,
    onSubmit,
  });

  return (
    <>
      <div className="contact_section" id="contact">
        <div className="container">
          <div className="txt_con">
            <h4>contact us</h4>
            <h2>get in touch with us</h2>
            <p className="subtitle">
              We're eager to assist you with your inquiries, suggestions, or
              feedback. Contact us today.
            </p>

            <p className="terms" onClick={() => setShowTerms(true)}>
              Terms & Conditions
            </p>

            <div className="info_con">
              <div className="box">
                <span>
                  <IoLocationOutline />
                </span>
                <div className="txt">
                  <h5>our location</h5>
                  <p>
                    800 N King Street Suite 304 2236 Wilmington, DE 19801 United
                    States
                  </p>
                </div>
              </div>
              <div className="box">
                <span>
                  <GiRotaryPhone />
                </span>
                <div className="txt">
                  <h5>phone number</h5>
                  <p>+1754-254-2430, +234-902-147-4294</p>
                </div>
              </div>
              <div className="box">
                <span>
                  <CiMail />
                </span>
                <div className="txt">
                  <h5>Email address</h5>
                  <p>info@olivia-stores.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="form_con">
            <form onSubmit={handleSubmit}>
              <div
                className={
                  errors?.name && touched?.name
                    ? "input_con error"
                    : "input_con"
                }
              >
                <input
                  type="text"
                  placeholder="your name"
                  value={values.name}
                  onChange={handleChange("name")}
                />
              </div>

              <div
                className={
                  errors?.email && touched?.email
                    ? "input_con error"
                    : "input_con"
                }
              >
                <input
                  type="email"
                  placeholder="your email"
                  value={values.email}
                  onChange={handleChange("email")}
                />
              </div>

              <div
                className={
                  errors?.phoneNumber && touched?.phoneNumber
                    ? "input_con error"
                    : "input_con"
                }
              >
                <input
                  type="number"
                  placeholder="your phone"
                  value={values.phoneNumber}
                  onChange={handleChange("phoneNumber")}
                />
              </div>

              <div
                className={
                  errors?.message && touched?.message
                    ? "input_con error"
                    : "input_con"
                }
              >
                <textarea
                  placeholder="your message"
                  value={values.message}
                  onChange={handleChange("message")}
                />
              </div>
              <Button text={"send message"} loading={isLoading} />
            </form>
          </div>
        </div>
      </div>

      {showTerms && <TermsConditions setShowTerms={setShowTerms} />}
    </>
  );
};
