import React from 'react';
import './App.css';
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.tsx</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
      <div>Welcome to Rezzipeas a online website built for nutritional tooling.</div>
      <div>Hello Pri, you are my first tester/vistor. Please enter a a single ingredient. Example '100g chicken' and click analyse to test it out.</div>
      <Home /> {/* Displaying the Home component */}
    </div>
  );
}

export default App;
