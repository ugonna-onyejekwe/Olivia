import "./enterDetails.scss";
import { Button, Password_input, SelectInput } from "../inputs";
import { useEffect, useState } from "react";
// import axios from "axios";
import { oliviaApi } from "../../api/baseurls";
import { useFormik } from "formik";
import { DetailsFormVAlidator } from "../../libs/validatorSchema";
import {
  businessCategorysOption,
  genderOptions,
  initialFormValue,
} from "../data";
import { getCookie, setCookie } from "../../libs/cookies";
import { useDispatch } from "react-redux";
import { displayMsg } from "../../libs/reducers/messageSlice";

export const EnterDetails = ({
  userSignupDetails,
  setUserSignupDetails,
  setsteps,
}) => {
  const [supportedCountries, setSupportedCountries] = useState([]);
  const [suggestedAddresses, setSuggestedAddresses] = useState([]);
  const [addressLoading, setAddressLoading] = useState(false);
  const [inputAddress, setInputAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  // Sign up user
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
      if (error?.message === "Network Error") {
        dispatch(
          displayMsg({
            message: "Check your internet connection and try again",
            type: "error",
          })
        );
      } else {
        dispatch(
          displayMsg({
            message:
              error?.response?.data?.error ||
              "Something went wrong. Try again later",
            type: "error",
          })
        );
      }

      console.log(error);
    }

    setIsLoading(false);
  };

  // Initializing Formik
  const { values, handleChange, handleSubmit, touched, errors, setFieldValue } =
    useFormik({
      initialValues: initialFormValue,
      validationSchema: DetailsFormVAlidator,
      onSubmit,
    });

  // Fetch supported countries
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await oliviaApi.get("signup/supported/countries");
        const data = response.data.supportedCurrencies;
        const country = data.map((i) => {
          return {
            value: i.country,
            label: i.country,
          };
        });

        setSupportedCountries([...country]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCountries();
  }, []);

  // Fetch suggested address
  useEffect(() => {
    const fetchAddress = async () => {
      setAddressLoading(true);
      try {
        const response = await oliviaApi.get("aggregator/address/suggestion", {
          headers: {
            input: inputAddress,
          },
        });

        // console.log(response.data);

        const data = response.data.googleAddresses.predictions;
        const addresses = data.map((i) => {
          return {
            value: i.description,
            label: i.description,
          };
        });

        setSuggestedAddresses([...addresses]);
      } catch (error) {
        console.log(error);
      }

      setAddressLoading(false);
    };

    fetchAddress();
  }, [inputAddress]);

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
          <div className="input_section select_con">
            <div className="input_box">
              <SelectInput
                options={genderOptions}
                value={values.gender}
                onchange={(value) => setFieldValue("gender", value.value)}
                placeholder={"Enter your gender"}
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

        {/*section5  */}
        <div className="input_section select_con">
          <div className="input_box">
            <SelectInput
              options={supportedCountries}
              value={values.country}
              onchange={(value) => setFieldValue("country", value.value)}
              placeholder={"Select your country"}
            />
          </div>
          {errors && touched.country && (
            <p className="error">{errors.country}</p>
          )}{" "}
        </div>

        {/*section6 */}
        <div className="input_section select_con">
          <div className="input_box">
            <SelectInput
              options={suggestedAddresses}
              value={values.companyAddress}
              onchange={(value) => setFieldValue("companyAddress", value.value)}
              placeholder={"Enter company address"}
              type="address"
              setAddress={setInputAddress}
              isLoading={addressLoading}
            />
          </div>
          {errors && touched.companyAddress && (
            <p className="error">{errors.companyAddress}</p>
          )}{" "}
        </div>

        {/*section7  */}
        <div className="input_section select_con">
          <div className="input_box">
            <SelectInput
              options={businessCategorysOption}
              value={values.businessCategory}
              onchange={(value) =>
                setFieldValue("businessCategory", value.value)
              }
              placeholder={"Select business category"}
            />
          </div>
          {errors && touched.businessCategory && (
            <p className="error">{errors.businessCategory}</p>
          )}{" "}
        </div>

        {/*section8 */}
        {values.businessCategory === "Others" && (
          <div className="input_section select_con">
            <div className="input_box">
              <input
                type="text"
                placeholder="Enter your business category"
                value={values.businessCategoryAlt}
                onChange={handleChange("businessCategoryAlt")}
              />
            </div>
            {errors && touched.businessCategory && (
              <p className="error">{errors.businessCategory}</p>
            )}{" "}
          </div>
        )}

        {/*section9  */}
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
