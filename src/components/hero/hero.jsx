import "./hero.scss";
import hero1 from "../../assets/hero1.png";
import hero2 from "../../assets/hero2.png";
import hero3 from "../../assets/hero3.png";
import getAppG from "../../assets/download-g.png";
import getAppA from "../../assets/download-a.png";
import { Link } from "react-router-dom";

// swiper
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";

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
          <Swiper
            modules={[EffectCoverflow, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            autoplay={{
              delay: 2000,
            }}
            speed={700}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 5,
            }}
          >
            <SwiperSlide className="img">
              <img src={hero1} alt="user image" />
            </SwiperSlide>
            <SwiperSlide className="img">
              <img src={hero2} alt="user image" />
            </SwiperSlide>
            <SwiperSlide className="img">
              <img src={hero3} alt="user image" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
