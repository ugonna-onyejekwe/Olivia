import "./footer.scss";
import logo from "../../assets/logo.png";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="box_1">
          <div className="footer_logo">
            <img src={logo} alt="logo" />
          </div>

          <p>
            Achieve business excellence with Olivia. Conquer industry
            challenges, expand your global footprint, and simplify complex
            processes.
          </p>
        </div>
        <div className="box_2">
          <h3>quick links</h3>
          <div className="links">
            <a href="#">home</a>
            <a href="#">about</a>
            <a href="#">our services</a>
            <a href="#">FAQs</a>
            <a href="#">contact us</a>
          </div>
        </div>
        <div className="box_3">
          <h3>socails</h3>
          <div className="socails_con">
            <span>
              <TiSocialFacebook />
            </span>

            <span>
              <FaXTwitter />
            </span>

            <span>
              <FaInstagram />
            </span>

            <span>
              <FaLinkedin />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
