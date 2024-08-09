import "./home.scss";
import home2 from "../../assets/hero2.webp";

export const Home = () => {
  return (
    <div className="home_page">
      <div className="container">
        <div className="txt_con" data-aos="zoom-in">
          <h1>
            Countless <span>solutions</span>
            <br /> to elevate your <span>business</span>.
          </h1>

          <p>
            Unlock your business’s full potential with Olivia. Our intuitive
            software empowers you to conquer challenges and expand globally.
            Experience business simplified.
          </p>

          <div className="btn">
            <button>get started</button>
          </div>
        </div>

        <div className="img_con" data-aos="zoom-in">
          <div className="img">
            <img src={home2} alt="user image" />
          </div>
        </div>
      </div>

      <div className="global_reach">
        <div className="box">
          <h3>
            5K+ <span>users</span>
          </h3>
          <p>
            Olivia Stores has amassed a substantial user base, surpassing an
            impressive milestone of over 5,000 successful sign-ups.
          </p>
        </div>
        <div className="box">
          <h3>
            {" "}
            46 <span>countries</span>
          </h3>
          <p>
            Our user base spans across a diverse geographic landscape,
            encompassing more than 46 countries worldwide.
          </p>
        </div>
        <div className="box">
          <h3>
            3K+ <span>orders</span>
          </h3>
          <p>
            We're thrilled to announce that Olivia Stores has successfully
            processed a staggering 3,000+ orders!
          </p>
        </div>
        {/* <div className="box">
          <h3>
            1B+ <span>transactions</span>
          </h3>
          <p>
            Olivia Stores has achieved a remarkable milestone by processing over
            one billion dollars in transaction volume.
          </p>
        </div> */}
      </div>
    </div>
  );
};
