import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [Theme, setTheme] = useState("light");
  const [modeText, setmodeText] = useState("Enable DarkMode");
  const [alert, setalert] = useState(null);

  const showAlert = (massage, type) => {
    setalert({
      massage: massage,
      type: type,
    });

    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const toggleTheme = () => {
    if (Theme === "light") {
      setTheme("dark");
      setmodeText("Enable LightMode");
      document.body.style.backgroundColor = "#121212";
      showAlert("Dark Mode is Enabled.", "success");
    } else {
      setTheme("light");
      setmodeText("Enable DarkMode");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is Enabled.", "success");
    }
  };

  return (
    <>
      {/* <Router> */}
      <Navbar
        title="TextUtils"
        Theme={Theme}
        toggleTheme={toggleTheme}
        modeText={modeText}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm show_alert={showAlert} heading="Enter the text to analyze" Theme={Theme} />
      </div>
      {/* <Routes>
        <Route path="/about" element={<About Theme={Theme}/>} />
        <Route
          path="/"
          element={
            <div className="container my-3">
              <TextForm
                show_alert={showAlert}
                heading="Enter the text to analyze"
                Theme={Theme}
              />
            </div>
          }
        />
      </Routes>
    </Router> */}
    </>
  );
}

export default App;
