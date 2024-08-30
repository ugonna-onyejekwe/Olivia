import { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { TbEyeClosed } from "react-icons/tb";
import { BeatLoader } from "react-spinners";
import { selectInputStyle } from "../libs/selectInputStlye";
import Select from "react-select";

// password Input
export const Password_input = ({ value, setValue, error, touched, type }) => {
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
      {error && touched && <p className="error">{error}</p>}
    </div>
  );
};

// Button
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

export const LineLoader = () => {
  return (
    <span>
      <BeatLoader size={5} color="#2b1864d9" />
    </span>
  );
};

// Select input
export const SelectInput = ({
  placeholder,
  options,
  value,
  onchange,
  type,
  setAddress,
  isLoading,
}) => {
  const defaultValue = ({ options, value }) => {
    return options?.find((i) => i.value === value);
  };

  return (
    <Select
      options={options}
      value={defaultValue(options, value)}
      onChange={(value) => {
        onchange(value);
      }}
      styles={selectInputStyle}
      placeholder={placeholder}
      className="select"
      onInputChange={(value) => {
        type === "address" ? setAddress(value) : "";
      }}
      isLoading={isLoading}
    />
  );
};
