import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Component/Footer"
import Navbar from "./Component/Navbar"
import LandingPage from "./Component/LandingPage";
import "../src/Bootstrap/css/bootstrap.min.css"
import "./index.css"
import Services from "./Component/Services";
import ContactUs from "./Component/ContactUs";
import CookiesPolicies from "./Component/CookiesPolicies";
import PrivacyPolicy from "./Component/PrivacyPolicy";
import TermCondition from "./Component/TermCondition";
import Carrer from "./Component/Carrer";
import SuccessScreen from "./Component/SuccessScreen";
import GetAnApp from "./Component/GetAnApp";
import AboutUs from "./Component/AboutUs";

function App() {
  return (
    <>
      <div class="bg-dark" >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/cookiespolicies" element={<CookiesPolicies />} />
            <Route path="/privacypolicies" element={<PrivacyPolicy />} />
            <Route path="/termcondition" element={<TermCondition />} />
            <Route path="/carrer" element={<Carrer />} />
            <Route path="/successscreen" element={<SuccessScreen />} />
            <Route path="/getanapp" element={<GetAnApp />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
