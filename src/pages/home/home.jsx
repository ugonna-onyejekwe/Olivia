import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { Hero } from "../../components/hero/hero";
import { Achievements } from "../../components/achievements/achievement";
import { Services } from "../../components/services/services";
import { Faqs } from "../../components/faqs/faqs";
import { Contact } from "../../components/contactUs/contact";
import { MoreServices } from "../../components/moreService/moreServies";
import "./home.scss";
import image from "../../assets/1.png";
export const Home = () => {
  return (
    <div className="home_page">
      {/* NAVBAR SECTION */}
      <Navbar />

      {/* MAIN SECTION */}
      <div className="main">
        <Hero />
        <Achievements />
        <Services />
        <MoreServices />
        <Faqs />
        <Contact />
      </div>

      {/* FOOTER SECTION */}
      <Footer />
    </div>
  );
};
