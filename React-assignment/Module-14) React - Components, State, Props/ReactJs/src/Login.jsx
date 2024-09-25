import React, { useState } from "react";
import "./style.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="container">
      <header className="header">
        <h2>Navigation</h2>
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      </header>

      <main className="body">
        {isLoggedIn ? <h2>Private Views</h2> : <h2>Public Views</h2>}
      </main>

      <footer className="footer">
        <h3>Footer</h3>
      </footer>
    </div>
  );
}

export default App;
