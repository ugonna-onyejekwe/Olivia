import React from "react";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { TiSocialFacebook } from "react-icons/ti";
import "./contact.scss";

export const Contact = () => {
  return (
    <div className="contact_section" id="contact">
      <div className="container">
        <div className="header" data-aos="fade-up">
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
              <span>
                <TiSocialFacebook />
              </span>

              <span>
                <FaXTwitter />
              </span>

              <span>
                <FaInstagram />
              </span>

              <span>
                <FaLinkedin />
              </span>
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
        </div>
      </div>
    </div>
  );
};
