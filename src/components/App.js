import React, { useState, useEffect } from "react";
import Home from "./Home";
import About from "./About";
import Navigation from "./Navigation";

function App() {
  const [route, setRoute] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setRoute(window.location.pathname);
    };
    window.addEventListener("popstate", handleLocationChange);
    return () => window.removeEventListener("popstate", handleLocationChange);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setRoute(path);
  };

  return (
    <div className="app">
      <Navigation onNavigate={navigate} />
      {route === "/" && <Home />}
      {route === "/about" && <About />}
    </div>
  );
}

export default App;
