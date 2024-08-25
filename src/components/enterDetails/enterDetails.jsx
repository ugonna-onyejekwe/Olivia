import "./enterDetails.scss";
import { Button, Password_input } from "../inputs";
import { useState } from "react";
// import Select from "react-select";
// import { selectInputStyle } from "../../libs/selectInputStlye";
// import axios from "axios";
import { oliviaApi } from "../../api/baseurls";
import { useFormik } from "formik";
import { DetailsFormVAlidator } from "../../libs/validatorSchema";
import { initialFormValue } from "../data";
import { getCookie, setCookie } from "../../libs/cookies";
import { useDispatch } from "react-redux";
import { displayMsg } from "../../libs/reducers/messageSlice";

export const EnterDetails = ({
  userSignupDetails,
  setUserSignupDetails,
  setsteps,
}) => {
  const [supportedCountries, setSupportedCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  // const options = [
  //   { value: "chocolate", label: "Chocolate" },
  //   { value: "strawberry", label: "Strawberry" },
  //   { value: "vanilla", label: "Vanilla" },
  // ];

  const onSubmit = async () => {
    const userEmail = getCookie("signup-email");

    setIsLoading(true);

    try {
      const response = await oliviaApi.post("/signup/signup", {
        address: values.address,
        companyname: values.companyName,
        country: values.country,
        description: values.aboutCompany,
        email: userEmail || userSignupDetails.email.toLowerCase(),
        name: `${values.firstName}` + " " + `${values.lastName}`,
        gender: values.gender,
        group: values.businessCategory,
        password: values.password,
        phonenumber: values.phonenumber,
        refereremail: values.referrerID,
      });

      console.log(response.data);
      setsteps(0);
      setCookie("currentStep", 1);
      setIsLoading(false);
      setUserSignupDetails({
        ...userSignupDetails,
        firstName: values.firstName,
      });
    } catch (error) {
      dispatch(
        displayMsg({
          message: error.message,
          type: "error",
        })
      );
      console.log(error);
    }

    // console.log(userSignupDetails);
    // setsteps(0);
    // setCookie("currentStep", 1);
    setIsLoading(false);
  };

  const { values, handleChange, handleSubmit, touched, errors } = useFormik({
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

      {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores quam
      placeat exercitationem impedit alias, saepe, beatae corporis laborum
      labore explicabo consectetur facere ex officiis blanditiis sequi. Ut quis
      nam nisi? */}

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
            {errors && touched.firstName && (
              <p className="error">{errors.firstName}</p>
            )}{" "}
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
            {errors && touched.lastName && (
              <p className="error">{errors.lastName}</p>
            )}{" "}
          </div>
        </div>

        {/* section2 */}
        <div className="col">
          <Password_input
            value={values.password}
            setValue={handleChange}
            error={errors.password}
            touched={touched.password}
            type=""
          />

          <Password_input
            value={values.confirmPassword}
            setValue={handleChange}
            error={errors.confirmPassword}
            touched={touched.confirmPassword}
            type="confirm"
          />
        </div>

        {/* section3 */}
        <div className="col">
          <div className="input_section">
            <div className="input_box">
              <input
                type="text"
                placeholder="Enter your gender"
                value={values.gender}
                onChange={handleChange("gender")}
              />
            </div>
            {errors && touched.gender && (
              <p className="error">{errors.gender}</p>
            )}{" "}
          </div>

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
            {errors && touched.companyName && (
              <p className="error">{errors.companyName}</p>
            )}{" "}
          </div>

          <div className="input_section">
            <div className="input_box">
              <input
                type="number"
                placeholder="Company's phone no."
                value={values.companyPhoneNumber}
                onChange={handleChange("companyPhoneNumber")}
              />
            </div>
            {errors && touched.companyPhoneNumber && (
              <p className="error">{errors.companyPhoneNumber}</p>
            )}{" "}
          </div>
        </div>

        {/*section6 */}
        <div className="input_section select_con">
          {/* <div className="input_box">
            <Select
              options={options}
              value={values.companyAddress}
              onChange={handleChange("companyAddress")}
              styles={selectInputStyle}
              placeholder="Enter company's address"
              className="select"
            />
          </div> */}
          <div className="input_box">
            <input
              type="text"
              placeholder="Company's address "
              value={values.companyAddress}
              onChange={handleChange("companyAddress")}
            />
          </div>
          {errors && touched.companyAddress && (
            <p className="error">{errors.companyAddress}</p>
          )}{" "}
        </div>

        {/*section5  */}
        <div className="input_section select_con">
          {/* <div className="input_box">
            <Select
              // options={options}
              options={supportedCountries}
              onChange={handleChange("country")}
              styles={selectInputStyle}
              placeholder="Enter country of residence"
              className="select"
            />
          </div> */}
          <div className="input_box">
            <input
              type="text"
              placeholder="Your country"
              value={values.country}
              onChange={handleChange("country")}
            />
          </div>
          {errors && touched.country && (
            <p className="error">{errors.country}</p>
          )}{" "}
        </div>

        {/*section7  */}
        <div className="input_section select_con">
          {/* <div className="input_box">
            <Select
              options={options}
              onChange={handleChange("businessCategory")}
              styles={selectInputStyle}
              placeholder="Select your business category"
              className="select"
            />
          </div> */}
          <div className="input_box">
            <input
              type="text"
              placeholder="Your business category"
              value={values.businessCategory}
              onChange={handleChange("businessCategory")}
            />
          </div>
          {errors && touched.businessCategory && (
            <p className="error">{errors.businessCategory}</p>
          )}{" "}
        </div>

        {/*section8  */}
        <div className="input_section">
          <div className="input_box">
            <textarea
              type="text"
              placeholder="About company"
              value={values.aboutCompany}
              onChange={handleChange("aboutCompany")}
            />
          </div>
          {errors && touched.aboutCompany && (
            <p className="error">{errors.aboutCompany}</p>
          )}{" "}
        </div>

        <div className="btns">
          <Button text={"Create my account"} loading={isLoading} />
        </div>
      </form>
    </div>
  );
};
