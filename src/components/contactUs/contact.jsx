import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import "./contact.scss";
import { CiMail } from "react-icons/ci";
import { GiRotaryPhone } from "react-icons/gi";
import { TermsConditions } from "../terms-conditions/terms-conditions";

export const Contact = () => {
  const [showTerms, setShowTerms] = useState(false);

  return (
    <>
      <div className="contact_section" id="contact">
        <div className="container">
          <div className="txt_con">
            <h4>contact us</h4>
            <h2>get in touch with us</h2>
            <p className="subtitle">
              We're eager to assist you with your inquiries, suggestions, or
              feedback. Contact us today.
            </p>

            <p className="terms" onClick={() => setShowTerms(true)}>
              Terms & Conditions
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
                  <p>+1754-254-2430, +234-902-147-4294</p>
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

      {showTerms && <TermsConditions setShowTerms={setShowTerms} />}
    </>
  );
};
