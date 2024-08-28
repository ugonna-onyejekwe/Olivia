export const loginErrors = (error) => {
  if (!error?.response) {
    return "No Server Response";
  } else if (error.response?.status === 400) {
    return "Missing Email or Password";
  } else if (error.response?.status === 401) {
    return "You are unauthorized to access this service";
  } else if (error?.message === "Network Error") {
    return "Check your network connection and try again.";
  } else if (error?.response?.data?.error === "Not Found") {
    return "Credentials not found, recheck and try again.";
  } else if (error?.response?.data?.error === "Wrong Login Details") {
    return "Wrong sign-in details";
  } else if (
    error?.response?.data?.error ===
    "You have a status of PENDING. Please contact Admin"
  ) {
    return "Your signup is currently being reviewed. Please try again later.";
  } else if (
    error?.response?.data?.error ===
    "You have a status of BLOCKED. Please contact Admin"
  ) {
    return "Your account has been blocked, please contact admin.";
  } else if (
    error?.response?.data?.error.includes("returned non unique result.")
  ) {
    return "You do not have permission to sign in on the web.";
  } else if (error?.response?.data?.error === "User Does Not Exist") {
    return "User does not exist";
  } else {
    return "Sign-in failed";
  }
};
