import "./App.css";
import Navbar from "./Components/Navbar";
import Showcase from "./Components/Showcase";

function App() {
  return (
    <div className="app">
      <div className="backgroundImg"></div>
      <div className="mainContainer">
        <Navbar />
        <Showcase />
      </div>
    </div>
  );
}

export default App;
