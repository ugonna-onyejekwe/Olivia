import Cookie from "js-cookie";

export const setCookie = (cookieName, cookieValue) =>
  Cookie.set(cookieName, cookieValue, {
    expires: 1,
    secure: true,
    sameSite: "strict",
    path: "/",
  });

export const getCookie = (cookieName) => Cookie.get(cookieName);
