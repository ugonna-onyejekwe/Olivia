import "./moreServices.scss";

import image1 from "../../assets/1.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

export const MoreServices = () => {
  return (
    <div className="moreServices_section">
      <div className="container">
        <div className="img_container">
          <Swiper
            modules={[Autoplay]}
            grabCursor={true}
            autoplay={{
              delay: 2000,
            }}
            speed={700}
            centeredSlides={true}
            slidesPerView={"auto"}
            spaceBetween={30}
          >
            <SwiperSlide className="img">
              <img src={image1} alt="user image" />
            </SwiperSlide>
            <SwiperSlide className="img">
              <img src={image1} alt="user image" />
            </SwiperSlide>
            <SwiperSlide className="img">
              <img src={image1} alt="user image" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="txt_con">
          <div className="box">
            <h3> Booking Services</h3>
            <p>
              Add a booking service to your custom Olivia Stores website. Easily
              manage appointments and reservations.
            </p>
          </div>
          <div className="box">
            <h3> Digital Products</h3>
            <p>
              Sell digital products effortlessly with Olivia Stores. Our
              platform simplifies online sales.
            </p>
          </div>
          <div className="box">
            <h3> Events </h3>
            <p>
              Easily add upcoming events to your Olivia Stores website. Share
              details, manage registrations, and sell tickets with our
              user-friendly tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
