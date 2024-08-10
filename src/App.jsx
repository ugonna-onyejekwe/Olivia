import { useEffect } from "react";
import "./App.scss";
import { Navbar } from "./components/navbar/navbar";
import { Contact } from "./pages/contactUs/contact";
import { Faqs } from "./pages/faqs/faqs";
import { Footer } from "./pages/footer/footer";
import { GetApp } from "./pages/getapp/getapp";
import { Home } from "./pages/home/home";
import { Reviews } from "./pages/reviews/reviews";
import { Services } from "./pages/services/services";
import AOS from "aos";
import "aos/dist/aos.css";
import { Achievements } from "./pages/achievements/achievement";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });
  }, []);

  return (
    <div className="main_app_con">
      <Navbar />
      <Home />
      <Achievements />
      <Services />
      <GetApp />
      <Reviews />
      <Faqs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
