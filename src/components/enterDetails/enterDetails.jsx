import "./enterDetails.scss";
import { Password_input } from "../inputs";
import { useState } from "react";
import Select from "react-select";
import { selectInputStyle } from "../../libs/selectInputStlye";
// import axios from "axios";
// import { oliviaApi } from "../../api/baseurls";
import { useFormik } from "formik";
import { DetailsFormVAlidator } from "../../libs/validatorSchema";
import { initialFormValue } from "../data";

export const EnterDetails = ({ userSignupDetails, setUserSignupDetails }) => {
  const [supportedCountries, setSupportedCountries] = useState([]);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const onSubmit = () => {};

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: initialFormValue,
    validationSchema: DetailsFormVAlidator,
    onSubmit,
  });

  // useEffect(() => {
  //   const fetchCountries = async () => {
  //     try {
  //       const response = await oliviaApi.get("signup/supported/countries");
  //       const data = response.data.supportedCurrencies;
  //       data.map((i) => {
  //         setSupportedCountries([
  //           ...supportedCountries,
  //           {
  //             value: i.country,
  //             label: i.country,
  //           },
  //         ]);
  //         console.log(supportedCountries);
  //       });
  //       console.log(supportedCountries);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchCountries();
  // });

  return (
    <div className="form_con enterDetails_section">
      <div className="header">
        <h3>Almost there!</h3>

        <p className="subheader">
          Enter your details to get your account ready
        </p>

        <p className="subheader2">
          <span>*</span> Please make sure that your first name and last name are
          the same as the name in your BVN <span>*</span>
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* name section1 */}
        <div className="col">
          <div className="input_section">
            <div className="input_box">
              <input
                type="text"
                placeholder="Your first name"
                value={values.firstName}
                onChange={handleChange("firstName")}
              />
            </div>
            {errors && <p className="error">{errors.firstName}</p>}{" "}
          </div>

          <div className="input_section">
            <div className="input_box">
              <input
                type="text"
                placeholder="Your last name"
                value={values.lastName}
                onChange={handleChange("lastName")}
              />
            </div>
            {errors && <p className="error">{errors.lastName}</p>}{" "}
          </div>
        </div>

        {/* section2 */}
        <div className="col">
          <Password_input
            value={values.password}
            setValue={handleChange}
            error={errors}
            type=""
          />

          <Password_input
            value={values.confirmPassword}
            setValue={handleChange}
            error={errors}
            type="confirm"
          />
        </div>

        {/* section3 */}
        <div className="input_section">
          <div className="input_box">
            <input
              type="text"
              placeholder="Your referrer email/ID (optional)"
              value={values.referrerID}
              onChange={handleChange("referrerID")}
            />
          </div>
        </div>

        {/*  section4 */}
        <div className="col">
          <div className="input_section">
            <div className="input_box">
              <input
                type="text"
                placeholder="Your company's name"
                value={values.companyName}
                onChange={handleChange("companyName")}
              />
            </div>
            {errors && <p className="error">{errors.companyName}</p>}{" "}
          </div>

          <div className="input_section">
            <div className="input_box">
              <input
                type="text"
                placeholder="Company's phone no."
                value={values.companyPhoneNumber}
                onChange={handleChange("companyPhoneNumber")}
              />
            </div>
            {errors && <p className="error">{errors.companyPhoneNumber}</p>}{" "}
          </div>
        </div>

        {/*section6 */}
        <div className="input_section select_con">
          <div className="input_box">
            <Select
              options={options}
              value={values.companyAddress}
              onChange={handleChange("companyAddress")}
              styles={selectInputStyle}
              placeholder="Enter company's address"
              className="select"
            />
          </div>
          {errors && <p className="error">{errors.companyAddress}</p>}{" "}
        </div>

        {/*section5  */}
        <div className="input_section select_con">
          <div className="input_box">
            <Select
              // options={options}
              options={supportedCountries}
              onChange={handleChange("country")}
              styles={selectInputStyle}
              placeholder="Enter country of residence"
              className="select"
            />
          </div>
          {errors && <p className="error">{errors.country}</p>}{" "}
        </div>

        {/*section7  */}
        <div className="input_section select_con">
          <div className="input_box">
            <Select
              options={options}
              onChange={handleChange("businessCategory")}
              styles={selectInputStyle}
              placeholder="Select your business category"
              className="select"
            />
          </div>
          {errors && <p className="error">{errors.businessCategory}</p>}{" "}
        </div>

        {/*section8  */}
        <div className="input_section">
          <div className="input_box">
            <textarea
              type="text"
              placeholder="About company"
              value={userSignupDetails.aboutCompany}
              onChange={handleChange("aboutCompany")}
            />
          </div>
          {errors && <p className="error">{errors.aboutCompany}</p>}{" "}
        </div>

        <div className="btns">
          <button>create my account</button>
        </div>
      </form>
    </div>
  );
};
