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
    .min(8, "Password must be up to 8 characters ")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*()_+{}\[\]:;<>?,./|]/,
      "Password must contain at least one special character"
    ),
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
  gender: yup.string().trim().required("Enter  your gender"),
  businessCategoryAlt: yup.string().trim(),
});

export const LoginValidation = yup.object({
  email: yup.string().trim().email().required("Enter email address"),
  password: yup.string().trim().required("Enter password"),
});

export const resetPassValidationSchema = yup.object({
  token: yup.string().trim().required("Enter token"),
  password: yup
    .string()
    .trim()
    .required("Password required")
    .min(8, "Password must be up to 8 characters ")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*()_+{}\[\]:;<>?,./|]/,
      "Password must contain at least one special character"
    ),
  confirmPassword: yup
    .string()
    .trim()
    .required("Required")
    .oneOf([yup.ref("password")], "Password has to match"),
});

export const ContactFormValidation = yup.object({
  name: yup.string().trim().required("Enter Name"),
  email: yup.string().email().required("Enter email"),
  phoneNumber: yup.string().trim().required("Enter phone number"),
  message: yup.string().trim().required("Enter message"),
});
