import React from "react";
import "./faqs.scss";
import { faqs } from "../../components/data";
import { FaqBox } from "../../components/faqbox";

export const Faqs = () => {
  return (
    <div className="faqs_page">
      <div className="container">
        <div className="header" data-aos="fade-up">
          <h2>Frequently Asked Questions</h2>
          <p>
            Explore our comprehensive FAQ section for clear and concise
            responses to common inquiries.
          </p>
        </div>

        <div className="wrapper" data-aos="fade-up">
          {faqs.map((i, key) => {
            return <FaqBox {...i} key={key} />;
          })}
        </div>
      </div>
    </div>
  );
};
