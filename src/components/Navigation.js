import React from "react";

function Navigation({ onNavigate }) {
  const handleClick = (e, path) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <nav>
      <a href="/" onClick={(e) => handleClick(e, "/")}>Home</a>
      {" | "}
      <a href="/about" onClick={(e) => handleClick(e, "/about")}>About</a>
    </nav>
  );
}

export default Navigation;
