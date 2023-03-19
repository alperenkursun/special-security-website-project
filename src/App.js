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
import { useEffect, useState } from "react";
import { Blocks } from "react-loader-spinner";
import Admin from "./Admin";
import PrivateRoute from "./PrivateRoute";
import Page404 from "./Components/Page404";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="app">
      {loading && (
        <div className="loading">
          <Blocks
            visible={true}
            height="300"
            width="300"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
          />
        </div>
      )}

      {!loading && (
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
            <Route path="/duyurular" element={<AnnouncementDetails />} />
            <Route path="/faaliyetlerimiz" element={<Activities />} />
            <Route path="/admingirisi" element={<AdminLogin />} />
            <Route path="*" element={<Page404 />} />
            <Route
              path="/admin"
              element={
                <PrivateRoute>
                  <Admin />
                </PrivateRoute>
              }
            />
          </Routes>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
