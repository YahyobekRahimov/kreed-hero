import "./App.scss";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import { ThemeContext } from "./contexts/ThemeContext";
import { useState } from "react";

function App() {
   const [theme, setTheme] = useState("light-mode");
   function toggleTheme() {
      setTheme(() =>
         theme === "light-mode" ? "dark-mode" : "light-mode"
      );
   }
   return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
         <main className={"main " + theme}>
            <BrowserRouter>
               <Header />
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route
                     path="/how-it-works"
                     element={<HowItWorks />}
                  />
                  <Route path="/services" element={<Services />} />
                  <Route path="/Contact" element={<Contact />} />
               </Routes>
            </BrowserRouter>
         </main>
      </ThemeContext.Provider>
   );
}

export default App;
