import { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { TbEyeClosed } from "react-icons/tb";
import { BeatLoader, PropagateLoader, SyncLoader } from "react-spinners";

export const Password_input = ({ value, setValue, error, type }) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="input_section">
      <div className="input_box">
        <input
          type={showPass ? "text" : "password"}
          value={value}
          onChange={
            type === "confirm"
              ? setValue("confirmPassword")
              : setValue("password")
          }
          placeholder="Password"
        />

        <span onClick={() => setShowPass(!showPass)}>
          {showPass ? <TbEyeClosed /> : <MdOutlineRemoveRedEye />}
        </span>
      </div>
      {error && (
        <p className="error">
          {type === "confirm" ? error.confirmPassword : error.password}
        </p>
      )}{" "}
    </div>
  );
};

export const Button = ({ text, loading }) => {
  return (
    <button type="submit" className={loading ? "loading" : ""}>
      {loading === true ? (
        <BeatLoader color="#fff" size={7} speedMultiplier={1} />
      ) : (
        text
      )}
    </button>
  );
};
