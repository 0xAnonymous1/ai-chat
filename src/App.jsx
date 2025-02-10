import Hero from "./Components/Hero/Hero";
// import Chat from "./Components/Login/Chat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS file
import { useEffect } from "react";


function App() {

  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration (in ms)
      offset: 100,    // Offset (in pixels) before animation starts
      easing: "ease-in-out", // Easing type
      once: true,  // Whether animation should happen only once
    });
  }, []);




  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Hero />}/>
        {/* <Route path="/google" element={<Chat/>}/> */}
      </Routes>
      
      
      </Router>
    </>
  );
}

export default App;
