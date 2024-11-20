import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Layout/Navbar/Navbar";
import HomePage from "./Components/HomePage/HomePage";
import Photospage from './Components/PhotoPage/PhotoSection';
import Videospage from './Components/VideoPage/VideoSection';
import Footer from "./Components/Layout/Footer/Footer";
import Contact from "./Components/HomePage/Contact/Contact";
import LoginUser from "./Components/Login/LoginUser";
import CreateEvent from "./Components/CreateEvent/CreateEvent";

function App() {

  const [login, SetLogin] = useState(false);

  const setLocalLogin = async () => {
    try {
      let userLogin = await localStorage.getItem("logIN");
      let parsed = JSON.parse(userLogin);
      if (parsed != null) {
        SetLogin(parsed);
      }
    } catch {
      return null;
    }
  };

  useEffect(() => {
    setLocalLogin();
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/photos' element={<Photospage />} />
          <Route path='/videos' element={<Videospage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<LoginUser />} />
          <Route path='/CreateEvent' element={<CreateEvent />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
