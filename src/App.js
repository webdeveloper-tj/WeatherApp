import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import NotFound from "./components/pages/NotFound/NotFound";
import FetchingDate from "./components/hooks/fetchingDate";
function App() {
  const [weather, setWeather] = useState("Dushanbe");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <>
                <Header setWeather={setWeather} weather={weather} />
                <FetchingDate weather={weather} />
              </>
            }
          />
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
