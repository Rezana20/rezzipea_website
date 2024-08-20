import React from 'react';
import './App.css';
import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/AppNavBar";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './assets/styles/Quote.css';
import './assets/styles/Footer.css';
import About from "./pages/About";
import OurKitchen from "./pages/OurKitchen";
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
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
});


function App() {
  return (
    <div className="App">
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <BrowserRouter>
                <Navbar/>

                <div>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/our-kitchen" element={<OurKitchen/>}/>
                        <Route path="/about" element={<About/>}/>
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
