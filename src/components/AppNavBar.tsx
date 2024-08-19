// Navbar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Button color="inherit" component={Link} to="/">
                    Rezzipeas
                </Button>
                <Button color="inherit" component={Link} to="/about">
                    About
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
