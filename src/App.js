import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route,Routes, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = (color) => {
    if (color && mode !== color) {
      setMode(color);
      setBtnText(`Enable ${color} Mode`);
      document.body.style.backgroundColor = color;
      showAlert(`${color} mode has been enabled`, "success");
    } else if (!color) {
      if (mode != "light") {
        setMode("light");
        setBtnText("Enable Dark Mode");
        document.body.style.backgroundColor = "white";
        showAlert("Light mode has been enabled", "success");
      } else if (mode != "dark") {
        setMode("dark");
        setBtnText("Enable Light Mode");
        document.body.style.backgroundColor = "gray";
        showAlert("Dark mode has been enabled", "danger");
      }
    }
  };
  return (
    <Router>
      <Navbar
        title="TextUtils"
        aboutText="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        btnText={btnText}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route
            exact
            path="/"
            element={<TextForm
              showAlert={showAlert}
              mode={mode}
              heading="Enter your text to analyze below"
            />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
