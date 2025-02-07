import Hero from "./Components/Hero/Hero";
// import Chat from "./Components/Login/Chat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
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
