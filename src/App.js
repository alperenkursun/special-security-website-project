import "./App.css";
import Footer from "./Components/Footer";
import Mainpage from "./Components/Mainpage";
import Navbar from "./Components/Navbar";
import Showcase from "./Components/Showcase";

function App() {
  return (
    <div className="app">
      <div className="backgroundImg"></div>
      <div className="mainContainer">
        <Navbar />
        <Showcase />
        <Mainpage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
