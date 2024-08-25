import * as yup from "yup";

export const EmailValidation = yup.object({
  email: yup.string().trim().email().required("Enter email address"),
});

export const OTP_Validation = yup.object({
  otp: yup.string().trim().required("Enter OTP"),
});

export const DetailsFormVAlidator = yup.object({
  firstName: yup.string().trim().required("Enter first name"),
  lastName: yup.string().trim().required("Enter last name"),
  password: yup
    .string()
    .trim()
    .required("Password required")
    .min(8, "Password must be up to 8 characters "),
  confirmPassword: yup
    .string()
    .trim()
    .required("Required")
    .oneOf([yup.ref("password")], "Password has to match"),
  referrerID: yup.string().trim(),
  companyName: yup.string().trim().required("Enter company's name"),
  companyAddress: yup.string().trim().required("Enter company's address"),
  companyPhoneNumber: yup.string().trim().required("Enter company's phone no."),
  country: yup.string().trim().required("Enter country of residence"),
  businessCategory: yup
    .string()
    .trim()
    .required("Enter country of business category"),
  aboutCompany: yup.string().trim().required("Enter company's description"),
});
