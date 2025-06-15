// import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [mode, setDarkMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleModeBlue = () => {
    if(mode === "light"){
      setDarkMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("success", "The dark mode has been set");
    }
    else {
      setDarkMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("success", "The light mode has been set")
    }
  }

  const toggleModeGreen = () => {
    if(mode === "light"){
      setDarkMode('dark');
      document.body.style.backgroundColor = "#2e6f40";
    }
    else {
      setDarkMode('light');
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" about="About TestUtils" mode={mode} toggleModeBlue={toggleModeBlue} toggleModeGreen={toggleModeGreen}/>
      <Alert alert={alert}/>
      <div className="container my-3">

        <Routes>

          <Route exact path="/about" element={<About mode={mode}/>}/>

          <Route exact path="/" element={<TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} showAlert={showAlert} toggleModeGreen={toggleModeGreen}/>}/>

        </Routes>      
      
      </div>
    </Router>
    </>
  );
}

export default App;
