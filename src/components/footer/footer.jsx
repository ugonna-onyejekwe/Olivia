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
            <a href="#services">our services</a>
            <a href="#reviews">reviews</a>

            <a href="#faq">FAQs</a>
            <a href="#contact">contact us</a>
          </div>
        </div>
        <div className="box_3">
          <h3>socails</h3>
          <div className="socails_con">
            <a href="https://x.com/theolivia_app/" target="_blank">
              <FaXTwitter />
            </a>

            <a
              href="https://www.instagram.com/theolivia_app?igsh=MXEzcDExcGFkN25vdw%3D%3D&utm_source=qr"
              target="_blank"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/company/the-olivia-app/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
