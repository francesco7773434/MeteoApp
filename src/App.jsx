import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TopBar from "./components/TopBar";

import Home from "./components/Home";
import MeteoDetails from "./components/MeteoDetails";
import FooterComponent from "./components/MyFooter";

function App() {
  return (
    <BrowserRouter>
      <TopBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meteo-details/:city" element={<MeteoDetails />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
