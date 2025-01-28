import React from "react";
import '../assets/styles/OurKitchen.css';
import Helmet  from "react-helmet";

const OurKitchen = () => {
    return (
        <div className="iframe-container">
            <Helmet>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-8E4SM9XTQB"></script>
                    <script>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-8E4SM9XTQB');
                    `}
                    </script>
            </Helmet>
            
            <iframe src="https://www.juicer.io/api/feeds/rezzipeas/iframe" frameBorder="0"
                    className="juicer-iframe"></iframe>
        </div>

    );

};
export default OurKitchen