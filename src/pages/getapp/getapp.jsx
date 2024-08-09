import "./getapp.scss";
import getApp from "../../assets/getapp.webp";
import downloadApp_G from "../../assets/download-g.jpg";
import downloadApp_A from "../../assets/download-a.jpg";

export const GetApp = () => {
  return (
    <div className="getapp">
      <div className="container">
        <div className="img" data-aos="fade-up-left">
          <img src={getApp} alt="image" />
        </div>

        <div className="txt_con" data-aos="fade-up-right">
          <h2>download olivia app</h2>

          <p>
            Unlock a world of convenience with the olivia app. Enjoy exclusive
            deals, faster checkout, personalized recommendations at your
            fingertips.
            <br /> Download now and experience the difference!
          </p>

          <div className="btns">
            <img src={downloadApp_G} alt="download app google" />
            <img src={downloadApp_A} alt="download app apple" />
          </div>
        </div>
      </div>
    </div>
  );
};
