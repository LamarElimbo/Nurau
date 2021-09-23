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
      <div className="page-container" style={{ display: "flex", flexDirection: "column", position: "relative" }}>
        <div className="header" style={{ height: "70px", backgroundColor: "rgb(254 107 96)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 30px" }}>
          <Link to="/">
            <img src={logo} alt="logo" style={{ height: "33px" }} />
            <img src={textLogo} alt="logo" style={{ height: "30px" }} />
          </Link>
          <div style={{ cursor: "pointer" }} onClick={toggleSidebar}>
            <div style={{ width: "25px", borderBottom: "white 3px solid", marginBottom: "7px" }}></div>
            <div style={{ width: "25px", borderBottom: "white 3px solid" }}></div>
          </div>
        </div>
        <div className="page-content" style={{ height: "100%", padding: "50px", display: "flex", alignItems: "center", flexDirection: "column" }}>
          <div className="content-body" style={{ maxWidth: "1200px" }}>
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
        </div>
        {sidebarDisplay &&
          <div className="sidebar" style={{ width: "430px", backgroundColor: "rgb(254 107 96)", position: "absolute", top: "70px", right: "0", padding: "30px" }}>
            <p style={{ marginBottom: "30px", color: "white", fontWeight: "700", fontSize: "18px" }}>About</p>
            <p style={{ marginBottom: "30px", color: "white", fontWeight: "700", fontSize: "18px" }}>Upcoming events</p>
            <p style={{ marginBottom: "30px", color: "white", fontWeight: "700", fontSize: "18px" }}>Past events</p>
            <p style={{ marginBottom: "30px", color: "white", fontWeight: "700", fontSize: "18px" }}>Your clips</p>
            <p style={{ marginBottom: "30px", color: "white", fontWeight: "700", fontSize: "18px" }}>Resources</p>
            <p style={{ marginBottom: "30px", color: "white", fontWeight: "700", fontSize: "18px" }}>Need to talk?</p>
          </div>
        }
        <div className="footer" style={{ height: "70%", backgroundColor: "rgb(254 107 96)", display: "flex", flexDirection: "column", padding: "60px" }}>
        <h1 style={{ marginBottom: "30px", color: "white", fontWeight: "700", fontSize: "40px" }}>Thanks for visiting Lamar's<br />Nurau Platform Interpretation!</h1>
        <p style={{ marginBottom: "30px", color: "white", fontWeight: "700", fontSize: "18px", maxWidth: "40em", lineHeight: "150%" }}>The purpose of this projeect was to help me to reflect on what Nurau's platform goals might be. I also hoped to demonstrate what I'm able to whip up in a day.</p>
        <p style={{ marginBottom: "10px", color: "white", fontWeight: "700", fontSize: "18px", maxWidth: "40em", lineHeight: "150%" }}>There are currently three live pages:</p>
        <ul>
          <li style={{ marginBottom: "10px", fontWeight: "700", fontSize: "18px" }}><Link to="/">The employee homepage</Link></li>
          <li style={{ marginBottom: "10px", fontWeight: "700", fontSize: "18px" }}><Link to="/chat">The chat page</Link></li>
          <li style={{ marginBottom: "10px", fontWeight: "700", fontSize: "18px" }}><Link to="/clips">The clips page</Link></li>
        </ul>
        <p style={{ marginBottom: "30px", color: "white", fontWeight: "700", fontSize: "18px", maxWidth: "40em", lineHeight: "150%" }}>Feel free to take a look at this <a href="https://www.figma.com/file/FCZIFwjJmlQvSgtJP593Ke/Nurau-Platform-Interpretation?node-id=0%3A1" target="__blank">Figma file</a>, showcasing a little bit about my design process (both, in terms of aesthetics and react component structure).</p>
        </div>
      </div>
    </Router>
  );
}

export default App;
