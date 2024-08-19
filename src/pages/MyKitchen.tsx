import React from "react";
import '../assets/styles/MyKitchen.css';

const MyKitchen = () => {
    return (
        <div className="iframe-container">
            <iframe src="https://www.juicer.io/api/feeds/rezzipeas/iframe" frameBorder="0"
                    className="juicer-iframe"></iframe>
        </div>

    );

};
export default MyKitchen