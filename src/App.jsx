import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TopBar from "./components/TopBar";

import FetchHome from "./components/FetchHome";
import MeteoDetails from "./components/MeteoDetails";

function App() {
  return (
    <BrowserRouter>
      <TopBar />

      <Routes>
        <Route path="/" element={<FetchHome />} />
        <Route path="/meteo-details/:city" element={<MeteoDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
