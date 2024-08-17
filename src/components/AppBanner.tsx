import React from 'react';
import '../assets/styles/Banner.css';

const AppBanner = () => {
    return (
        <div className="banner">
            <div>
                <h1>Unleash Your Potential with [Your Service]</h1>
                <p>Expert solutions to drive your success. Discover how we can help you today.</p>
                <button className="cta-button">Get Started</button>
            </div>
        </div>
    );
};

export default AppBanner;
