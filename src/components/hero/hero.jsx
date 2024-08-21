import "./hero.scss";
// import home2 from "../../assets/hero2.webp";
import home2 from "../../assets/retail.png";
import getAppG from "../../assets/download-g.png";
import getAppA from "../../assets/download-a.png";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="Hero_page">
      <div className="container">
        <div className="txt_con" data-aos="zoom-in">
          <h1>
            <span>Simplifying</span> Commerce
          </h1>

          <p>
            Built for business owners, entrepreneurs and established brands. No
            commitment, no fees, and no hidden recurring charges.
          </p>

          <div className="btns">
            <Link to={"/signup"}>
              <button>create an account</button>
            </Link>
          </div>

          <div className="download_app_btns">
            <Link to={"/"} className="img">
              <img src={getAppG} alt="get app on google store" />
            </Link>

            <Link to={"/"} className="img">
              <img src={getAppA} alt="get app on apple store" />
            </Link>
          </div>
        </div>

        <div className="img_con" data-aos="zoom-in">
          <div className="img">
            <img src={home2} alt="user image" />
          </div>
        </div>
      </div>
    </div>
  );
};
