import React from "react";
import '../assets/styles/Home.css';
import AppAboutMe from "../components/AppAboutMe";
import Helmet  from "react-helmet";

const About = () => {

        return (    
            <div>
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
                <AppAboutMe/>
            </div>
        );
};

export default About;
