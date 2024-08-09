import "./reviews.scss";

import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteLeft } from "react-icons/fa";
import { reviewsData } from "../../components/data";

export const Reviews = () => {
  return (
    <div className="reviews_section">
      <div className="container">
        <div className="header" data-aos="fade-up">
          <h2> our happy customers</h2>
          <p>
            Our satisfied customers rave about their experiences. Read their
            stories and see why <span>Olivia</span> is the preferred choice.
          </p>
        </div>

        <div className="reviews_wrapper" data-aos="fade-up">
          <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="swiper_con"
            breakpoints={{
              500: {
                slidesPerView: "auto",
              },
            }}
          >
            {reviewsData.map((i, key) => {
              return (
                <SwiperSlide className="box" key={key}>
                  <span className="quote">
                    <FaQuoteLeft />
                  </span>

                  <p className="txt">{i.review}</p>

                  <div className="avatar_section">
                    <div className="img">
                      <img src={i.image} alt="image" />
                    </div>

                    <div className="txt_con">
                      <h4>{i.name}</h4>
                      <p>{i.occupation}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
