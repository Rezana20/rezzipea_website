import {Stack} from "@mui/material";
import AppTryButton from "./AppTryButton";
import React from "react";


const AppBanner = () => {
    return (
        <div className="upper-banner">
            <div className="quote-section">
                <blockquote className="quote-text">
                    "Healthy bodies are nurtured in the kitchen, one meal at a time"
                </blockquote>
            </div>
            <div className="container">
                <Stack>
                    <a href="#evaluation-tool-section" style={{textDecoration: 'none'}}>
                        <AppTryButton label="Try out our nutritional evaluation tool"/>
                    </a>
                </Stack>
            </div>
        </div>
    );

};

export default AppBanner;