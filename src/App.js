// import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from 'react';

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
    let btns = document.querySelectorAll('.btn-primary');
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
      <Navbar title="TextUtils" about="About TestUtils" mode={mode} toggleModeBlue={toggleModeBlue} toggleModeGreen={toggleModeGreen}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} toggleModeGreen={toggleModeGreen}/>
      <About mode={mode}/>
      </div>
    </>
  );
}

export default App;
