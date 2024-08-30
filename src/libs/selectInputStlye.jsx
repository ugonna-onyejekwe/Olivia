export const selectInputStyle = {
  control: (styles, { isFocused }) => ({
    ...styles,
    padding: "5px",
    border: "1px ",
    outline: isFocused ? "1px solid #2b1864" : "",
  }),
  singleValue: (styles) => ({
    ...styles,
    fontSize: "14px",
    fontWeight: "500",
  }),
  placeholder: (styles) => ({
    ...styles,
    fontSize: "14px",
    fontWeight: "500",
  }),
  option: (styles, { isSelected, isFocused }) => ({
    ...styles,
    backgroundColor: isSelected ? "#2b1864" : isFocused ? "#f2f2f8" : "",
    fontSize: "15px",
    cursor: "pointer",
    padding: "10px ",
  }),
};
