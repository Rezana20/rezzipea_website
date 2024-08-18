import React from 'react';
import './App.css';
import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/AppNavBar";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './assets/styles/Quote.css';
import './assets/styles/Footer.css';
const theme = createTheme({
    palette: {
        primary: {
            main: '#1D3557',  // Dark Blue (Deep Mediterranean Sea)
        },
        secondary: {
            main: '#FFD166',  // Bright Yellow (Sunshine)
        },
        background: {
            default: '#FFFFFF',  // Classic White
            paper: '#FFFFFF',  // Classic White
        },
        text: {
            primary: '#1D3557',  // Dark Blue (for strong text)
            secondary: '#F4A261',  // Warm Terracotta (or adjust this to a lighter shade if needed)
        },
        // accent: {
        //     main: '#E63946',  // Coral Red (for additional vibrancy)
        // },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
});


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

        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <BrowserRouter>
                <Navbar/>
                <div className="upper-banner">
                    <div className="quote-section">
                        <blockquote className="quote-text">
                            "Healthy bodies are nurtured in the kitchen, one meal at a time"
                        </blockquote>
                    </div>
                </div>
                <div style={{padding: '20px'}}>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<Home/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
            <footer className="footer">
                <p>Connect with us on <a href="https://www.instagram.com/rezzipeas/" target="_blank"
                                         rel="noopener noreferrer">Instagram</a></p>
            </footer>

        </ThemeProvider>


    </div>
  );
}

export default App;
