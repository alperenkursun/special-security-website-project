import { Route, Routes } from "react-router-dom";
import "./App.css";
import ArmedSpecialSecurity from "./Components/ArmedSpecialSecurity";
import UnarmedSpecialSecurity from "./Components/UnarmedSpecialSecurity";
import CompanyProfile from "./Components/CompanyProfile";
import EducationStrategy from "./Components/EducationStrategy";
import Footer from "./Components/Footer";
import MainPage from "./Components/MainPage";
import Navbar from "./Components/Navbar";
import QualityPolicy from "./Components/QualityPolicy";
import Renewal from "./Components/Renewal";
import ArmedEducation from "./Components/ArmedEducation";
import UnarmedEducation from "./Components/UnarmedEducation";
import RenewalEducation from "./Components/RenewalEducation";
import Contact from "./Components/Contact";
import AdminLogin from "./Components/AdminLogin";
import AnnouncementDetails from "./Components/AnnouncementDetails";
import Activities from "./Components/Activities";

function App() {
  return (
    <div className="app">
      <div className="mainContainer">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/sirketprofili" element={<CompanyProfile />} />
          <Route path="/kalitepolitikamiz" element={<QualityPolicy />} />
          <Route path="/egitimstratejimiz" element={<EducationStrategy />} />
          <Route
            path="/silahliozelguvenlikkimlikkartiislemleri"
            element={<ArmedSpecialSecurity />}
          />
          <Route
            path="/silahsizozelguvenlikkimlikkartiislemleri"
            element={<UnarmedSpecialSecurity />}
          />
          <Route
            path="/yenilemeegitiminegirenlerinislemleri"
            element={<Renewal />}
          />
          <Route path="/silahliegitim" element={<ArmedEducation />} />
          <Route path="/silahsizegitim" element={<UnarmedEducation />} />
          <Route path="/yenilemeegitimi" element={<RenewalEducation />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/admingirisi" element={<AdminLogin />} />
          <Route path="/duyurular" element={<AnnouncementDetails />} />
          <Route path="/faaliyetlerimiz" element={<Activities />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
