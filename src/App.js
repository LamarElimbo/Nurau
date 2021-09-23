import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './images/logo.png';
import textLogo from './images/text-logo.png';
import './App.css';
import EmployeeHomePage from "./components/EmployeeHomePage";
import ChatPage from "./components/ChatPage";
import ClipsPage from "./components/ClipsPage";

const App = () => {
  const [sidebarDisplay, setSidebarDisplay] = useState(false)
  const toggleSidebar = () => setSidebarDisplay(!sidebarDisplay)
  console.log("sidebarDisplay: ", sidebarDisplay)

  return (
    <Router>
      <div className="page-container" style={{ height: "100vh", width: "100vw", position: "relative" }}>
        <div className="header" style={{ height: "70px", backgroundColor: "rgb(254 107 96)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 30px" }}>
          <Link to="/">
            <img src={logo} alt="logo" style={{ height: "33px" }} />
            <img src={textLogo} alt="logo" style={{ height: "30px" }} />
          </Link>
          <div onClick={toggleSidebar}>
            <div style={{ width: "25px", borderBottom: "white 3px solid", marginBottom: "7px" }}></div>
            <div style={{ width: "25px", borderBottom: "white 3px solid" }}></div>
          </div>
        </div>
        <div className="page-content" style={{ height: "100%", padding: "50px" }}>
          <Route path="/" exact>
            <EmployeeHomePage />
          </Route>

          <Route path="/chat" exact>
            <ChatPage />
          </Route>

          <Route path="/clips" exact>
            <ClipsPage />
          </Route>

        </div>
        {sidebarDisplay &&
          <div className="sidebar" style={{ width: "430px", height: "100%", backgroundColor: "rgb(254 107 96)", position: "absolute", top: "70px", right: "0", padding: "30px" }}>
            <p style={{ marginBottom: "30px", color: "white", fontWeight: "700", fontSize: "18px" }}>About</p>
            <p style={{ marginBottom: "30px", color: "white", fontWeight: "700", fontSize: "18px" }}>Upcoming events</p>
            <p style={{ marginBottom: "30px", color: "white", fontWeight: "700", fontSize: "18px" }}>Past events</p>
            <p style={{ marginBottom: "30px", color: "white", fontWeight: "700", fontSize: "18px" }}>Your clips</p>
            <p style={{ marginBottom: "30px", color: "white", fontWeight: "700", fontSize: "18px" }}>Resources</p>
            <p style={{ marginBottom: "30px", color: "white", fontWeight: "700", fontSize: "18px" }}>Need to talk?</p>
          </div>
        }
      </div>
    </Router>
  );
}

export default App;
