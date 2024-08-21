import "./services.scss";
import retail from "../../assets/retail.png";
import kiosk from "../../assets/kiosk.png";
import payment from "../../assets/payment.png";
import template from "../../assets/template.png";

export const Services = () => {
  return (
    <div className="services_con" id="services">
      <div className="container">
        <section>
          <div className="img_con" data-aos="fade-up-left">
            <img src={retail} alt="image" />
          </div>

          <div className="txt_con" data-aos="fade-up-right">
            <h2>Comprehensive Retail Solutions</h2>
            <p>
              Our Comprehensive Retail Solutions offer a robust platform
              designed to streamline operations, enhance customer experiences,
              and drive sales growth. From inventory management and
              point-of-sale to customer relationship management and analytics,
              our solution provides retailers with the tools they need to
              succeed in today's competitive market.
            </p>

            <button>get started</button>
          </div>
        </section>

        <section>
          <div className="img_con" data-aos="fade-up-right">
            <img src={kiosk} alt="image" />
          </div>

          <div className="txt_con" data-aos="fade-up-left">
            <h2>Advanced Self-Service Kiosks</h2>
            <p>
              Our self-service kiosks offer a convenient and efficient solution
              for your customers. These interactive terminals empower users to
              independently complete tasks, reducing wait times and improving
              overall satisfaction. From making purchases to accessing
              information, our kiosks deliver a seamless and personalized
              experience.
            </p>

            <button>get started</button>
          </div>
        </section>

        <section>
          <div className="img_con" data-aos="fade-up-right">
            <img src={payment} alt="image" />
          </div>

          <div className="txt_con" data-aos="fade-up-left">
            <h2>Enhanced Agency Banking </h2>
            <p>
              Our Agency Banking solution brings banking services closer to
              communities. Through our extensive network of agents, we offer
              convenient access to financial transactions, including cash
              deposits, withdrawals, transfers, and bill payments. We are
              committed to financial inclusion and empowering communities.
            </p>

            <button>get started</button>
          </div>
        </section>

        <section>
          <div className="img_con" data-aos="fade-up-right">
            <img src={template} alt="image" />
          </div>

          <div className="txt_con" data-aos="fade-up-left">
            <h2>Fully Customizable Website Templates</h2>
            <p>
              Our customizable website templates empower you to create a unique
              online presence without coding expertise. With a vast selection of
              professionally designed layouts, you can easily tailor your
              website to match your brand identity and business goals. Enjoy the
              flexibility to modify colors, fonts, images, and content to create
              a truly personalized digital space.
            </p>

            <button>get started</button>
          </div>
        </section>
      </div>
    </div>
  );
};
