import "./home.scss";
import home2 from "../../assets/hero2.webp";
import getAppG from "../../assets/download-g.jpg";
import getAppA from "../../assets/download-a.jpg";

export const Home = () => {
  return (
    <div className="home_page">
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
            <button>create an account</button>
            <button>
              <span>or</span> Sign In
            </button>
          </div>

          <div className="download_app_btns">
            <div className="img">
              <img src={getAppG} alt="get app on google store" />
            </div>

            <div className="img">
              <img src={getAppA} alt="get app on apple store" />
            </div>
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
