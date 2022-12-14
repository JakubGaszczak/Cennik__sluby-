import React from "react"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import HomeScreen from "./components/HomeScreen/HomeScreen";
import AboutUsScreen from "./components/aboutUsScreen/AboutUsScreen";
import OfferScreen from "./components/OfferScreen/OfferScreen";
import AllPages from "./AllPages";

function App() {


  return (
    <div className="app">
      <Router>
        <Routes>
            <Route path="/" element={<AllPages />} />
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/aboutUs" element={<AboutUsScreen />} />
            <Route path="/portfolio" element={<OfferScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
