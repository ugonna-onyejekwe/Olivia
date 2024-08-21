import { RiMenuFill } from "react-icons/ri";
import logo from "../../assets/logo.png";
import "./navbar.scss";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";

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
            <a href="#" onClick={() => setIsActive(false)}>
              home
            </a>
            <a href="#services" onClick={() => setIsActive(false)}>
              our service
            </a>

            <a href="#faq" onClick={() => setIsActive(false)}>
              FAQs
            </a>
            <a href="#contact" onClick={() => setIsActive(false)}>
              contact us
            </a>
          </div>
          <Link to={"/login"}>
            <div className="btn">
              <button>sign in</button>
            </div>
          </Link>
        </div>

        <div className="menu_btn" onClick={() => setIsActive(!isActive)}>
          {isActive ? <MdOutlineClose /> : <RiMenuFill />}
        </div>
      </div>
    </nav>
  );
};
