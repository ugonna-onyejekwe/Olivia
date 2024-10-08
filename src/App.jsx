import { useEffect } from "react";
import "./App.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Login } from "./pages/login/login";
import { Signup } from "./pages/signUp/signup";
import { Message_bannner } from "./components/messageBanner/message";
import { useDispatch, useSelector } from "react-redux";
import { removeMsg } from "./libs/reducers/messageSlice";
import { ResetPass } from "./pages/resetPass/resetPass";

function App() {
  const messageiaActive = useSelector((state) => state.messager.active);
  const dispatch = useDispatch();

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });
  }, []);

  // Remove message banner after 3s
  if (messageiaActive === true) {
    setTimeout(() => {
      dispatch(removeMsg());
    }, 5000);
  }

  return (
    <div className="main_app_con">
      <Message_bannner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/password-reset" element={<ResetPass />} />
      </Routes>
    </div>
  );
}

export default App;
