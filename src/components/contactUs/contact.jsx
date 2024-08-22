import React from "react";
// import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
// import { TiSocialFacebook } from "react-icons/ti";
import "./contact.scss";
import { CiMail } from "react-icons/ci";
import { GiRotaryPhone } from "react-icons/gi";

export const Contact = () => {
  return (
    <div className="contact_section" id="contact">
      <div className="container">
        {/* <div className="header" data-aos="fade-up">
          <h2>contact us</h2>
          <p>
            We're eager to assist you with your inquiries, suggestions, or
            feedback. Contact us today.
          </p>
        </div>

        <div className="wrapper">
          <div className="info_section" data-aos="fade-right">
            <h4>info</h4>
            <div className="txt_con">
              <p>
                <span>
                  <IoLocationOutline />
                </span>
                800 N King Street Suite 304 2236 Wilmington, DE 19801 United
                States
              </p>

              <p>
                <span>
                  <MdEmail />
                </span>
                info@olivia-stores.com
              </p>

              <p>
                <span>
                  <MdLocalPhone />
                </span>
                +1754-254-2430, +234-902-147-4294
              </p>
            </div>

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
          <div className="form_section" data-aos="fade-left">
            <h4>Drop your message</h4>
            <form action="#">
              <div className="box_con">
                <div className="input_con">
                  <input type="text" placeholder="Your name" />
                </div>
                <div className="input_con">
                  <input type="email" placeholder="Your email" />
                </div>
              </div>
              <div className="input_con">
                <textarea placeholder="Your message"></textarea>
              </div>
              <div className="btn">
                <button>send</button>
              </div>
            </form>
          </div>
        </div> */}

        <div className="txt_con">
          <h4>contact us</h4>
          <h2>get in touch with us</h2>
          <p className="subtitle">
            We're eager to assist you with your inquiries, suggestions, or
            feedback. Contact us today.
          </p>

          <div className="info_con">
            <div className="box">
              <span>
                <IoLocationOutline />
              </span>
              <div className="txt">
                <h5>our location</h5>
                <p>
                  800 N King Street Suite 304 2236 Wilmington, DE 19801 United
                  States
                </p>
              </div>
            </div>
            <div className="box">
              <span>
                <GiRotaryPhone />
              </span>
              <div className="txt">
                <h5>phone number</h5>
                <p>+1754-254-2430 +234-902-147-4294</p>
              </div>
            </div>
            <div className="box">
              <span>
                <CiMail />
              </span>
              <div className="txt">
                <h5>Email address</h5>
                <p>info@olivia-stores.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="form_con">
          <form action="#">
            <div className="input_con">
              <input type="text" placeholder="your name" />
            </div>

            <div className="input_con">
              <input type="email" placeholder="your email" />
            </div>

            <div className="input_con">
              <input type="number" placeholder="your phone" />
            </div>

            <div className="input_con">
              <textarea placeholder="your message" />
            </div>
            <button>send message</button>
          </form>
        </div>
      </div>
    </div>
  );
};
