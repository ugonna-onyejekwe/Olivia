import { IoMdCheckmark, IoMdClose } from "react-icons/io";
import "./message.scss";

export const Message_bannner = ({ type, message }) => {
  return (
    <div
      className="message_banner_con"
      style={{
        color: `${type === "error" ? "#fdadad" : "#b3d9b3"}`,
      }}
    >
      {type === "error" && (
        <p
          className={type}
          style={{
            color: "rgb(232, 18, 18)",
          }}
        >
          <span
            style={{
              color: "rgb(232, 18, 18)",
            }}
          >
            <IoMdClose />
          </span>{" "}
          {message}
        </p>
      )}

      {type === "success" && (
        <p
          className={type}
          style={{
            color: "rgb(15, 158, 15);",
          }}
        >
          <span
            style={{
              color: "rgb(15, 158, 15);",
            }}
          >
            {" "}
            <IoMdCheckmark />
          </span>{" "}
          {/* {message} */} error message
        </p>
      )}
    </div>
  );
};
