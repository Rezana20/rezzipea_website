import React from 'react';
import { AppBar, Toolbar, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css';

function AppNavBar() {
    return (
        <AppBar position="sticky" className="app-bar">
            <Toolbar className="toolbar">
                <IconButton edge="start" color="inherit" component={Link} to="/" className="home-button">
                    <img src="/lemon.ico" alt="Home" className="home-icon" />
                </IconButton>
                <div className="menu-buttons">
                    <Button color="inherit" component={Link} to="/my-kitchen" className="menu-button">
                        My Kitchen
                    </Button>
                    <Button color="inherit" component={Link} to="/about" className="menu-button">
                        About
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default AppNavBar;
