import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

export const FaqBox = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className={isActive ? "box active" : "box"}
      onClick={() => setIsActive(!isActive)}
    >
      <h4 className={isActive ? "active" : ""}>
        {question} <span>{isActive ? <FiMinus /> : <FiPlus />}</span>
      </h4>
      <div className="txt" dangerouslySetInnerHTML={{ __html: answer }}></div>
    </div>
  );
};
