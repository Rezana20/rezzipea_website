import React from "react";
import '../assets/styles/OurKitchen.css';

const OurKitchen = () => {
    return (
        <div className="iframe-container">
            <iframe src="https://www.juicer.io/api/feeds/rezzipeas/iframe" frameBorder="0"
                    className="juicer-iframe"></iframe>
        </div>

    );

};
export default OurKitchen