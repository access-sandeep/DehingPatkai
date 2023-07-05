import React from 'react';
import logo from './images/logo.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div><img src={logo} className="App-logo" alt="logo" /></div>
        <div>
          <div id="glow-ingress-block">
              <span className="nav-line-1 nav-progressive-content" id="glow-ingress-line1">
                  Deliver to Sandeep
              </span>
              <span className="nav-line-2 nav-progressive-content" id="glow-ingress-line2">
                  Chennai 600130&zwnj;
              </span>
          </div>
        </div>
        Header placeholder
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
      <main>
        Main area
      </main>
      <footer>
        Footer Content
      </footer>
    </div>
  );
}

export default App;
