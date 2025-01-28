import React from "react";
import '../assets/styles/Home.css';
import AppNutritionalInfo from "../components/AppNutritionalInfo";
import FoodCommunity from "../components/AppFoodCommunity";
import AppBanner from "../components/AppBanner";
import Helmet from "react-helmet";

const Home = () => {

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
                <AppBanner/>
                <FoodCommunity />
                <div id="evaluation-tool-section">
                <AppNutritionalInfo />
                </div>
            </div>
        );
};

export default Home;
