import { IoMdCheckmark, IoMdClose } from "react-icons/io";
import "./message.scss";
import { useSelector } from "react-redux";
import { MdOutlinePending } from "react-icons/md";

export const Message_bannner = () => {
  const isActive = useSelector((state) => state.messager.active);
  const type = useSelector((state) => state.messager.type);
  const message = useSelector((state) => state.messager.message);

  return (
    <div
      className={
        isActive
          ? `message_banner_con active ${type}`
          : `message_banner_con ${type}`
      }
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
            color: "rgb(15, 158, 15)",
          }}
        >
          <span
            style={{
              color: "rgb(15, 158, 15)",
            }}
          >
            {" "}
            <IoMdCheckmark />
          </span>{" "}
          {message}
        </p>
      )}

      {type === "pending" && (
        <p
          className={type}
          style={{
            color: "rgb(170, 149, 14)",
          }}
        >
          <span
            style={{
              color: "rgb(170, 149, 14)",
            }}
          >
            {" "}
            <MdOutlinePending />
          </span>{" "}
          {message}
        </p>
      )}
    </div>
  );
};
