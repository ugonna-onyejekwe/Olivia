import { RiMenuFill } from "react-icons/ri";
import logo from "../../assets/logo.png";
import "./navbar.scss";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className={isActive ? "navigators active" : "navigators"}>
          <div className="links">
            <a href="#">home</a>
            <a href="#">about</a>
            <a href="#">our service</a>
            <a href="#">FAQs</a>
            <a href="#">contact us</a>
          </div>
          <div className="btn">
            <button>sign in</button>
          </div>
        </div>

        <div className="menu_btn" onClick={() => setIsActive(!isActive)}>
          {isActive ? <MdOutlineClose /> : <RiMenuFill />}
        </div>
      </div>
    </nav>
  );
};
