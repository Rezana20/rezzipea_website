import React, { useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css';

function AppNavBar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // Define the toggleDrawer function with proper typing
    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && (event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift') {
            return;
        }
        setIsDrawerOpen(open);
    };

    const menuItems = [
        { text: 'Our Kitchen', to: '/our-kitchen' },
        { text: 'About', to: '/about' }
    ];

    return (
        <AppBar position="sticky" className="app-bar">
            <Toolbar className="toolbar">
                <IconButton edge="start" color="inherit" component={Link} to="/" className="home-button">
                    <img src="/lemon.ico" alt="Home" className="home-icon" />
                </IconButton>

                <div className="menu-buttons desktop-menu">
                    {menuItems.map((item, index) => (
                        <Button
                            key={index}
                            color="inherit"
                            component={Link}
                            to={item.to}
                            className="menu-button"
                        >
                            {item.text}
                        </Button>
                    ))}
                </div>

                <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer(true)}
                    className="mobile-menu-icon"
                    sx={{ display: { xs: 'block', sm: 'none' } }}  // Show on small screens
                >
                    <MenuIcon />
                </IconButton>

                <Drawer
                    anchor="right"
                    open={isDrawerOpen}
                    onClose={toggleDrawer(false)}
                    className="mobile-menu-drawer"
                >
                    <List>
                        {menuItems.map((item, index) => (
                            <ListItem
                                button
                                key={index}
                                component={Link}
                                to={item.to}
                                onClick={toggleDrawer(false)}
                            >
                                <ListItemText primary={item.text} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </Toolbar>
        </AppBar>
    );
}

export default AppNavBar;
